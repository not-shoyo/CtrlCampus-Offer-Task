import React, { Component } from "react";

class InputField extends Component {
  state = { value: "" };

  changeText = ({ value }) => {
    this.setState({ value });
  };

  render() {
    return (
      <React.Fragment>
        <input
          className="input-text-field"
          type="text"
          onChange={(e) => this.changeText(e.target)}></input>
        <button
          className="add-button"
          onClick={() => this.props.onAddClick(this.state.value)}>
          Add
        </button>
        <br />
        <button className="cross-button" onClick={this.props.onCrossClick}>
          Cross
        </button>
        <button className="tick-button" onClick={this.props.onTickClick}>
          Tick
        </button>
      </React.Fragment>
    );
  }
}

export default InputField;
