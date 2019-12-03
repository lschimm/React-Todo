import React from 'react'
import Todo from './Todo.js'

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todos.map(todo => (
                <div className="todos">
                    <Todo
                        todos = {todo}
                        key = {todo.id}
                        toggleT = {props.todoToggle}
                    />
                </div>
            ))}
        </div>
    )
}

export default TodoList