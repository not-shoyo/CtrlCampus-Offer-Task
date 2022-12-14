import React, { useEffect, useState } from "react";

import InputField from "./components/InputField/InputField";
import ListOfItems from "./components/ListOfItems/ListOfItems";

import "./App.css";

const App = () => {
  const [list, setList] = useState([]);

  const getTasksAPI = () => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => {
        res.json().then((list) => setList(list));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTasksAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target[list.length].value = "";
  };

  const addItemToList = (task) => {
    if (task === "" || list.indexOf(task) !== -1) return;

    postATaskAPI(task).then((item) => {
      let newList = [...list, item];
      setList(newList);
    });
  };

  const handleCheck = (e) => {
    const { target } = e;

    target.checked = false;
    const { _id, done, selected } = list.find((task) => task._id === target.id);

    updateATaskAPI(_id, done, !selected).then((item) => {
      let newList = [...list];
      let task = newList.find((t) => t._id === item._id);
      task.done = done;
      task.selected = !selected;
      setList(newList);
    });
  };

  const handleTick = () => {
    list.forEach((task) => {
      if (task.selected) {
        const { _id, done, selected } = task;
        updateATaskAPI(_id, !done, !selected).then((item) => {
          let newList = [...list];
          let task = newList.find((t) => t._id === item._id);
          task.done = !done;
          task.selected = !selected;
          setList(newList);
        });
      }
    });
  };

  const handleCross = () => {
    let list = [];
    list.forEach((task) => {
      if (!task.selected) {
        list.push(task);
      }
    });

    list.forEach((task) => {
      if (task.selected) {
        deleteATaskAPI(task._id);
      }
    });

    setList(list);
  };

  return (
    <React.Fragment>
      <div className="outer-container">
        <div className="card-container">
          <h1 className="heading">Todos</h1>
          <form
            className="interactive-region"
            action="/"
            onSubmit={(e) => handleSubmit(e)}>
            <ListOfItems list={list} handleCheck={handleCheck} />
            <br />
            <InputField
              onAddClick={addItemToList}
              onTickClick={handleTick}
              onCrossClick={handleCross}
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

const postATaskAPI = async (title) => {
  const res = await fetch("http://localhost:5000/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
    }),
  });
  return await res.json();
};

const updateATaskAPI = async (id, done, selected) => {
  try {
    const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        done: done,
        selected: selected,
      }),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

const deleteATaskAPI = async (id) => {
  const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};

export default App;

// class App extends Component {
//   state = { list: [] };

//   getTasksAPI = () => {
//     fetch("http://localhost:5000/api/tasks")
//       .then((res) => {
//         res.json().then((list) => this.setState({ list }));
//       })
//       .catch((err) => console.log(err));
//   };

//   postATaskAPI = async (title) => {
//     const res = await fetch("http://localhost:5000/api/tasks", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         title: title,
//       }),
//     });
//     return await res.json();
//   };

//   updateATaskAPI = async (id, done, selected) => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           done: done,
//           selected: selected,
//         }),
//       });
//       return await res.json();
//     } catch (err) {
//       return console.log(err);
//     }
//   };

//   deleteATaskAPI = async (id) => {
//     const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
//       method: "DELETE",
//     });
//     return await res.json();
//   };

//   componentDidMount() {
//     this.getTasksAPI();
//   }

//   addItemToList = (task) => {
//     if (task === "" || this.state.list.indexOf(task) !== -1) return;

//     this.postATaskAPI(task).then((item) => {
//       let list = [...this.state.list, item];
//       this.setState({ list });
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     e.target[this.state.list.length].value = "";
//   };

//   handleCheck = (e) => {
//     const { target } = e;

//     target.checked = false;
//     const { _id, done, selected } = this.state.list.find(
//       (task) => task._id === target.id
//     );

//     this.updateATaskAPI(_id, done, !selected).then((item) => {
//       let list = [...this.state.list];
//       let task = list.find((t) => t._id === item._id);
//       task.done = done;
//       task.selected = !selected;
//       this.setState({ list });
//     });
//   };

//   handleTick = () => {
//     this.state.list.forEach((task) => {
//       if (task.selected) {
//         const { _id, done, selected } = task;
//         this.updateATaskAPI(_id, !done, !selected).then((item) => {
//           let list = [...this.state.list];
//           let task = list.find((t) => t._id === item._id);
//           task.done = !done;
//           task.selected = !selected;
//           this.setState({ list });
//         });
//       }
//     });
//   };

//   handleCross = () => {
//     let list = [];
//     this.state.list.forEach((task) => {
//       if (!task.selected) {
//         list.push(task);
//       }
//     });

//     this.state.list.forEach((task) => {
//       if (task.selected) {
//         this.deleteATaskAPI(task._id);
//       }
//     });

//     this.setState({ list });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div className="outer-container">
//           <div className="card-container">
//             <h1 className="heading">Todos</h1>
//             <form
//               className="interactive-region"
//               action="/"
//               onSubmit={(e) => this.handleSubmit(e)}>
//               <ListOfItems
//                 list={this.state.list}
//                 handleCheck={this.handleCheck}
//               />
//               <br />
//               <InputField
//                 onAddClick={this.addItemToList}
//                 onTickClick={this.handleTick}
//                 onCrossClick={this.handleCross}
//               />
//             </form>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
