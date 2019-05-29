import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
// import Todo from './components/TodoComponents/Todo';
// import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state,
  // and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List: </h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;