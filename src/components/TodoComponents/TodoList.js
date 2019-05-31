// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// like student.js

// `<TodoList />` receives your Todos array and iterates over
// the list generating a new `<Todo />` for each element in the array.


import React, { Component } from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(todo => (
                <div>
                <Todo 
                    todos= {todo}
                    key = {todo.id} 
                    toggleT = {props.todoToggle}
                />
                </div>
            ))}
        </div>
    )
}

export default TodoList;