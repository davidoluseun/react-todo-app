import React, { Component } from "react";

export class TodosForm extends Component {
  constructor() {
    super();

    this.inputRef = React.createRef();
  }

  // Focus the input field when this component is mounted
  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const { handleChange, handleSubmit } = this.props;

    return (
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="todo-form"
        autoComplete="off"
      >
        <input
          ref={this.inputRef}
          className="todo-input"
          type="text"
          name="todoInput"
          placeholder="What needs to be done?"
          onChange={(e) => handleChange(e)}
        />
      </form>
    );
  }
}

export default TodosForm;
