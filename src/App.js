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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state,
  // and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List: </h2>
        <TodoList 
        todos={this.state.listsData} />
        {/* <Todo todos={this.state}/> */}
        <TodoForm 
        todos={this.state} 
        todoChange={this.changeHandler} 
        addNewTask={this.addListData}
        />
      </div>
    );
  }
}


export default App;