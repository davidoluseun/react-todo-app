import React from 'react'
import Unchecked from '../images/checkbox.svg'

const ActiveTodos = ({ activeTodos, onCheck, onDelete }) => {
    
    // If activeTodos is empty return null
    if (!activeTodos.length) return null
    
    // Otherwise render the activeTodos task    
    return (
        <ul className="todo-list">
            {activeTodos.map(todo => 
                <li key={todo.id}>
                    <div className="task-wrap">
                        <button onClick={() => onCheck(todo)}>
                            <img src={Unchecked} alt="" />
                        </button>
                        <div className="uncompleted">{todo.task}</div>
                    </div>
                    <button onClick={() => onDelete(todo.id)} className="delete-btn">
                        <span className="sr-only">Delete</span>
                        <span className="fas fa-trash" aria-hidden="true"></span>
                    </button>
                </li>
            )} 
        </ul>
    ) 
}

export default ActiveTodos
