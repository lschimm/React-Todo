// `<TodoForm>` will hold your input field and your
// `Add Todo` and `Clear Completed` buttons.
import React from 'react';

// handleChanges = event => {
//     this.setState({
//       [event.target.task]: event.target.value
//     });
//   };

const TodoForm = props  => {
        return (
            <form onSubmit={props.addNewTask}>
                <input
                    type="text"
                    name="task"
                    placeholder="enter task"
                    value= {props.todos.task}
                    onChange={props.todoChange}
                 />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
}


export default TodoForm;