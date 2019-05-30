// `<Todo />` is a component that takes in the `todo`
// data and displays the task to the screen.

import React, { Component } from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';



const Todo = props => {
    return (
        props.todos.task
    )
}



export default Todo;
