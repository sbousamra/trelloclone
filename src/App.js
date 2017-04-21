import React from 'react';

class ToDoApp extends React.Component {

  constructor() {
    super();
    this.state = {
      InitialInputQuestion: ToDoApp.defaultProps.defaultInputQuestion,
      InputtedToDo: ToDoApp.defaultProps.defaultInputToDo,
      ToDoArray: []
    }
  }

  getToDoInput(input) {
    this.setState(
      {
        InputtedToDo: input.target.value
      }
    )
  }

  toDoInputToButton(toDoArray) {
    toDoArray.map(toDo => <ToDoButton buttonName={toDo}/>)
  }

  render() {
    return (
      <div>
        <Title title="Welcome to Bass's Todo App"/>
        <InputToDo question={this.state.InitialInputQuestion} currentState={this.getToDoInput.bind(this)}/>
        <SubmitInputToDo updateList={this.state.ToDoArray.push(this.state.InputtedToDo)}/>
        <br/><br/><li>{this.toDoInputToButton(this.state.ToDoArray)}</li>
      </div>
    );
  }
}

const Title = (props) => <h1> {props.title} </h1>
const InputToDo = (props) => <input type="text" size="27" placeholder={props.question} onChange={props.currentState}/>
const SubmitInputToDo = (props) => <input type="submit" onSubmit={props.updateList}/>
const ToDoButton = (props) => <button> {props.buttonName} </button>

ToDoApp.defaultProps = {
  defaultInputQuestion: "What do you need to do today?",
  defaultInputToDo:""
}

export default ToDoApp;
