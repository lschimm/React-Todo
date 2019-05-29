// `<TodoForm>` will hold your input field and your
// `Add Todo` and `Clear Completed` buttons.
import React from 'react';

// handleChanges = event => {
//     this.setState({
//       [event.target.task]: event.target.value
//     });
//   };

class TodoForm extends React.Component {
    constructor () {
        super();
        this.state = {
            taskData: data
        }
    }

    handleSubmit(e) {
        this.s
    }
    render(
        return (
            <div className="TodoForm">
                {/* <input placeholder="Task"
                onChange={this.handleChanges} /> */}
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        )
    )
}
export default TodoForm;