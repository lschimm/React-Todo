import React from 'react'
import './Todo.css'

const Todo = props => {
    return (
        <div
          className={`task${props.todos.completed ? " completed" : ""}`}
          onClick={() => props.toggleT(props.todos.id)}
        >
          <p>{props.todos.task}</p>
        </div>
      );
    };
    
    export default Todo;