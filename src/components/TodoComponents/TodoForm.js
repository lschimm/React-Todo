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
                name="todo"
                placeholder="enter task"
                value={props.value}
                onChange={props.todoChange}
                 />
                <button onClick={props.addNewTask}>Add Todo</button>
                <button OnClick={props.clearTask}>Clear Completed</button>
            </form>
        )
}
export default TodoForm;