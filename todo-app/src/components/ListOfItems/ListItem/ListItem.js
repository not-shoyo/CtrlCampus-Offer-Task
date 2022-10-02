import React, { Component } from "react";

class ListItem extends Component {
  state = { item: this.props.item, idx: this.props.idx };
  render() {
    return (
      <li key={this.state.key}>
        <input
          type="checkbox"
          id={this.state.idx}
          value={this.state.item.title}
          onChange={(e) => this.props.onCheck(e)}
        />
        <label htmlFor={this.state.idx}>
          {JSON.stringify(this.state.item)}
        </label>
      </li>
    );
  }
}

export default ListItem;
