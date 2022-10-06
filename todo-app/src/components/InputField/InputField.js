import React, { useState } from "react";

import "./InputField.css";

const InputField = (props) => {
  const [value, setValue] = useState("");

  const changeText = ({ value }) => {
    setValue(value);
  };

  return (
    <React.Fragment>
      <div className="input-row">
        <input
          name="input-field"
          title="input-field"
          className="input-text-field form-control"
          type="text"
          onChange={(e) => changeText(e.target)}></input>
        <button className="add-button" onClick={() => props.onAddClick(value)}>
          +
        </button>
      </div>
      <br />
      <div className="row-of-buttons">
        <button
          className="action-button cross-button"
          onClick={props.onCrossClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#f35939"
            viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="200"
              y1="56"
              x2="56"
              y2="200"
              fill="none"
              stroke="#f35939"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"></line>
            <line
              x1="200"
              y1="200"
              x2="56"
              y2="56"
              fill="none"
              stroke="#f35939"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"></line>
          </svg>
        </button>
        <button
          className="action-button tick-button"
          onClick={props.onTickClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#1db76f"
            viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <polyline
              points="216 72 104 184 48 128"
              fill="none"
              stroke="#1db76f"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"></polyline>
          </svg>
        </button>
      </div>
    </React.Fragment>
  );
};

export default InputField;

// class InputField extends Component {
//   state = { value: "" };

//   changeText = ({ value }) => {
//     this.setState({ value });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <div className="input-row">
//           <input
//             name="input-field"
//             title="input-field"
//             className="input-text-field form-control"
//             type="text"
//             onChange={(e) => this.changeText(e.target)}></input>
//           <button
//             className="add-button"
//             onClick={() => this.props.onAddClick(this.state.value)}>
//             +
//           </button>
//         </div>
//         <br />
//         <div className="row-of-buttons">
//           <button
//             className="action-button cross-button"
//             onClick={this.props.onCrossClick}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="#f35939"
//               viewBox="0 0 256 256">
//               <rect width="256" height="256" fill="none"></rect>
//               <line
//                 x1="200"
//                 y1="56"
//                 x2="56"
//                 y2="200"
//                 fill="none"
//                 stroke="#f35939"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="24"></line>
//               <line
//                 x1="200"
//                 y1="200"
//                 x2="56"
//                 y2="56"
//                 fill="none"
//                 stroke="#f35939"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="24"></line>
//             </svg>
//           </button>
//           <button
//             className="action-button tick-button"
//             onClick={this.props.onTickClick}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="#1db76f"
//               viewBox="0 0 256 256">
//               <rect width="256" height="256" fill="none"></rect>
//               <polyline
//                 points="216 72 104 184 48 128"
//                 fill="none"
//                 stroke="#1db76f"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="24"></polyline>
//             </svg>
//           </button>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
