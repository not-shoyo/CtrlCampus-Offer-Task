const Joi = require("joi");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Task = require("./models/task");
const testAPIRouter = require("./testAPI");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/testAPI", testAPIRouter);

const PORT = process.env.PORT || 5000;

const dbURI =
  "mongodb+srv://first-user:8zWbTYU46p0VvScN@ctrlcampustaskcluster.j6nzifg.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server listening to port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("weeeee have an errorrrrrr");
    console.log(err);
  });

// let tasks = [
//   { title: "learnreact", done: false, selected: false },
//   {
//     title: "learnredux",
//     done: false,
//     selected: false,
//   },
//   { title: "profit", done: false, selected: false },
// ];

app.get("/", (req, res) => {
  res.send("Hello World!!");
  // res.send(JSON.stringify(tasks));
});

app.get("/api/tasks", (req, res) => {
  Task.find().exec((err, tasks) => res.send(JSON.stringify(tasks)));
});

app.post("/api/tasks", (req, res) => {
  const { validationError } = validateTask(req.body);
  if (validationError) {
    return res.status(404).send(validationError.details[0].message);
  }

  const task = new Task({
    title: req.body.title,
    done: false,
    selected: false,
  });
  task
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/api/tasks/:id", (req, res) => {
  Task.findById(req.params.id).exec((err, task) => {
    if (!task)
      return res
        .status(404)
        .send(`The course with title '${req.params.title}' was not found`);
    res.send(task);
  });
});

app.put("/api/tasks/:id", (req, res) => {
  Task.findById(req.params.id).exec((err, task) => {
    if (err)
      return res
        .status(404)
        .send(`The task with id '${req.params.id}' was not found`);

    const { validationError } = validateTask(req.body);
    if (validationError) {
      return res.status(404).send(validationError.details[0].message);
    }

    task.done = req.body.done;
    task.selected = req.body.selected;

    task
      .save()
      .then((result) => res.send(result))
      .catch((err) => console.log(err));
  });
});

app.delete("/api/tasks/:id", (req, res) => {
  Task.findById(req.params.id).exec((err, task) => {
    if (!task)
      return res
        .status(404)
        .send(
          JSON.stringify(`The task with id '${req.params.id}' was not found`)
        );

    task.delete();
  });
});

function validateTask({ id }) {
  const schema = Joi.object({
    id: Joi.string().min(1).required(),
  });
  return schema.validate({ id });
}
