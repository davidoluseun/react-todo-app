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
    const { onChange, onSubmit } = this.props;

    return (
      <form
        onSubmit={(e) => onSubmit(e)}
        className="todo-form"
        autoComplete="off"
      >
        <input
          ref={this.inputRef}
          className="todo-input"
          type="text"
          name="todoInput"
          placeholder="What needs to be done?"
          onChange={(e) => onChange(e)}
        />
      </form>
    );
  }
}

export default TodosForm;
