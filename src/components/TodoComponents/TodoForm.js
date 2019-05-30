// `<TodoForm>` will hold your input field and your
// `Add Todo` and `Clear Completed` buttons.
import React from 'react';

// handleChanges = event => {
//     this.setState({
//       [event.target.task]: event.target.value
//     });
//   };

// const TodoForm = props  => {
//         return (
//             <form onSubmit={props.addNewTask}>
//                 <input
//                     type="text"
//                     name="task"
//                     placeholder="enter task"
//                     value= {props.todos.task}
//                     onChange={props.todoChange}
//                  />
//                 <button>Add Todo</button>
//                 <button>Clear Completed</button>
                
//             </form>
//         )
// }

class TodoForm extends React.Component {
    constructor() {
        super(); 
        this.state = {
            item: ''
        }
    }
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

    submitTask = event => {
        event.preventDefault();
        this.props.submitTask(this.state.item);
        this.setState ({ task: ''});
    };

    render() {
        return(
            <form onSubmit= {this.submitTask} className="todo-form">
                <input
                    name="task"
                    placeholder="enter task"
                    value= {this.state.task}
                    onChange={this.changeHandler}
                 />
                 <button>Add Todo</button>
                 {/* <button onClick={this.props.clearCompleted}>Clear Completed</button> */}
            </form>
        )
    }
}


export default TodoForm;