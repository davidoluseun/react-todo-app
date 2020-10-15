import React from 'react'
import Checked from '../images/checkbox-checked.svg'

const CompletedTodos = ({ completedTodos, onCheck, onDelete }) => {    
    
    // If completedTodos is empty return null
    if (!completedTodos.length) return null
    
    // Otherwise render the completedTodos task
    return (
        <ul className="todo-list">
            {completedTodos.map(todo => 
                <li key={todo.id}>
                    <div className="task-wrap">
                        <button onClick={() => onCheck(todo)}>
                            <img src={Checked} alt="" />
                        </button>
                        <div className="completed">{todo.task}</div>
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

export default CompletedTodos
