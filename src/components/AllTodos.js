import React from "react";
import Checked from "../images/checkbox-checked.svg";
import Unchecked from "../images/checkbox.svg";

const AllTodos = ({ todos, onDelete, onCheck }) => {
  // If todos is empty return null
  if (!todos.length) return null;

  // Otherwise render the todos task
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <div className="task-wrap">
            <button onClick={() => onCheck(todo)}>
              <img
                src={todo.status === "uncompleted" ? Unchecked : Checked}
                alt=""
              />
            </button>
            <div className={todo.status === "uncompleted" ? "" : "completed"}>
              {todo.task}
            </div>
          </div>
          <button onClick={() => onDelete(todo.id)} className="delete-btn">
            <span className="sr-only">Delete</span>
            <span className="fas fa-trash" aria-hidden="true"></span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AllTodos;
