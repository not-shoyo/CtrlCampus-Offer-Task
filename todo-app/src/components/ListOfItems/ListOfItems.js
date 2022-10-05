import React, { Component } from "react";

import ListItem from "./ListItem/ListItem";

import "./ListOfItems.css";

class ListOfItems extends Component {
  createList = (list) => {
    return list.map((item) => (
      <ListItem
        key={item._id}
        item={item}
        idx={item._id}
        onCheck={this.props.handleCheck}
      />
    ));
  };

  render() {
    return (
      <ul className="list-of-items list-group list-group-flush">
        {this.createList(this.props.list)}
      </ul>
    );
  }
}

export default ListOfItems;
