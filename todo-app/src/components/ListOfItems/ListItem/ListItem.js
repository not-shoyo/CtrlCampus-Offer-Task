import React from "react";

import "./ListItem.css";

const ListItem = (props) => {
  return (
    <li
      className={
        "list-group-item task-in-list" + (props.item.done ? " done-item" : "")
      }
      key={props.key}>
      <input
        className="input-checkbox "
        type="checkbox"
        id={props.idx}
        value={props.item.title}
        onChange={(e) => props.onCheck(e)}
      />
      <label htmlFor={props.idx}>{props.item.title}</label>
      <button
        disabled
        className={"tick-icon" + (props.item.done ? " done-item" : "")}>
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
    </li>
  );
};

export default ListItem;

// class ListItem extends Component {
//   state = { item: this.props.item, idx: this.props.idx };
//   render() {
//     return (
//       <li
//         className={
//           "list-group-item task-in-list" +
//           (this.state.item.done ? " done-item" : "")
//         }
//         key={this.state.key}>
//         <input
//           className="input-checkbox "
//           type="checkbox"
//           id={this.state.idx}
//           value={this.state.item.title}
//           onChange={(e) => this.props.onCheck(e)}
//         />
//         <label htmlFor={this.state.idx}>{this.state.item.title}</label>
//         <button
//           disabled
//           className={"tick-icon" + (this.state.item.done ? " done-item" : "")}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="#1db76f"
//             viewBox="0 0 256 256">
//             <rect width="256" height="256" fill="none"></rect>
//             <polyline
//               points="216 72 104 184 48 128"
//               fill="none"
//               stroke="#1db76f"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="24"></polyline>
//           </svg>
//         </button>
//       </li>
//     );
//   }
// }
