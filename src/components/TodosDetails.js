import React from "react";
import { NavLink } from "react-router-dom";

const TodosDetails = ({ todos, activeTodos, onMarkAll, onClear }) => {
  // If todos is empty return null
  if (!todos.length) return null;

  // Otherwise render the details
  return (
    <div className="todo-details">
      <div className="actions">
        <h2 className="details-title">Actions</h2>
        <button onClick={onMarkAll} className="actions-btn">
          Mark All Completed
        </button>
        <br />
        <br />
        <button onClick={onClear} className="actions-btn">
          Clear Completed
        </button>
      </div>

      <div className="active-count">
        <h2 className="details-title">Remaining Todos</h2>
        <div>{activeTodos.length} items left</div>
      </div>

      <div className="filters">
        <h2 className="details-title">Filter by Status</h2>
        <NavLink to="/">All</NavLink>
        <br />
        <NavLink to="/active">Active</NavLink>
        <br />
        <NavLink to="/completed">Completed</NavLink>
        <br />
      </div>
    </div>
  );
};

export default TodosDetails;
