import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js'
import TodoList from './components/TodoComponents/TodoList.js'
import { lists } from './tododata'
import './components/TodoComponents/Todo.css'

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      listsData: lists,

      task: '',
      id: 0,
      completed: false
    }
  }

  change_handler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addListData= event => {
    event.preventDedfault()

    const newData = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    }

    this.setState({
      listsData: [...this.state.listsData, newData],
      task: '',
      id: Date.now(),
      completed: false
    })
  }

  toggleTask = taskId => {
    // map over the array
    // when a task is clicked, toggle the task completed field
    // otherwise return to the task uncompleted

    this.setState({
      listsData: this.state.listsData.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault()
    this.setState({
      listsData: this.state.listsData.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div className="main-list">
        <h1>Todo List:</h1>
        <p>To clear items, click item, and then press Clear Completed button</p>
        <TodoList
        todo s= {this.state.listsData}
        todoToggle = {this.toggleTask}
        />
        <TodoForm
        todos = {this.state}
        todoChange = {this.changeHandler}
        addNewTask = {this.addListData}
        clearTodo = {this.clearCompleted}
        />
      </div>
    )
  }
}