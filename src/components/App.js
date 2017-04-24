import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class ToDoApp extends React.Component {

  constructor() {
    super();
    this.state = {
      todoform: "",
    	todos: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAppend = this.handleAppend.bind(this)
    this.handleEnter = this.handleEnter.bind(this)

  }

  handleInput(e) {
    this.setState({todoform: e.target.value})
  }

  handleDelete(e, index) {
      this.state.todos.splice(index, 1)
      this.setState({todos: this.state.todos})
  }

  handleAppend() {
    const updatedList = this.state.todos.concat([this.state.todoform])
    this.setState({todos: updatedList})
  }

  handleEnter(e) {
    if (e.charCode === 13) {
      console.log("yes")
      this.handleAppend()
      this.handleClearInput(e)
    }
  }

  handleClearInput(e) {
    e.target.value = ""
  }

  render() {
    return (
      <div>
      	<div><h1> Todo App </h1></div>
      	<TodoForm handleInput={this.handleInput} handleAppend={this.handleAppend} handleEnter={this.handleEnter} handleClearInput={this.handleClearInput}/>
      	<TodoList todos={this.state.todos} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default ToDoApp;
