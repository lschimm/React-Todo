import React from 'react'

export default class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: ''
        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitTask = event => {
        event.preventDefault()
        this.setState  ({ tasl: ''})
        this.props.addNewTask(event, this.props.task)
    }

    render() {
        return(
            <form className="todo-form">
                <input
                    type="text"
                    name="task"
                    placeholder="Enter your task here"
                    value= {this.props.task}
                    onChange={this.props.todoChange}
                 />
                 <div className="todo-buttons">
                    <button onClick={this.submitTask}>Add Task</button>
                    <button onClick={this.props.clearTodo}>Clear Completed</button>
                 </div>
            </form>
        )
    }
}