import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import { lists } from './tododata';
import { random } from 'node-forge';
// import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      listsData: lists,

      task: '',
      id: 0,
      completed: false
      };
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addListData = event => {
    event.preventDefault();

    const newData = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };

    this.setState({
      listsData: [...this.state.listsData, newData],
      task: '',
      id: Date.now(),
      completed: false
    })
  }

  toggleTask = taskId => {
    // map over array
    // when task is clicked, toggle the task completed field
    // otherwise return to the task uncompleted
    this.setState({
      listsData: this.state.listsData.map(task => {
        if (taskId === task.id){
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault();
    // if task is completed (task.purchased is true_ then filter out)
    this.setState ({
      listsData: this.state.listsData.filter(task => !task.completed)
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state,
  // and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List: </h2>
        <TodoList 
          todos={this.state.listsData} 
          todoToggle={this.toggleTask}
          />
        <TodoForm 
          todos={this.state} 
          todoChange={this.changeHandler} 
          addNewTask={this.addListData}
          clearTodo={this.clearCompleted}
        />
      </div>
    );
  }
}


export default App;