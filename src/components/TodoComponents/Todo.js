// `<Todo />` is a component that takes in the `todo`
// data and displays the task to the screen.

import React from 'react';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            someValue: ""
        }
    }
    render() {
        return (
            <div className="Task">
                <h1>Todo</h1>
            </div>
        )
    }
}

export default Todo;