// `<Todo />` is a component that takes in the `todo`
// data and displays the task to the screen.

import React, { Component } from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';



const Todo = props => {
    return (
        // <div className={`task${props.task.completed === true ? ' completed' : ''}`}
        // onClick={() => props.toggleTask(props.task.id)}
        // >
        // {props.todos.task}
        props.todos.task
        // </div>
    )
}



export default Todo;