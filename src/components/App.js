import React from 'react';
import TitleBar from './titleBar'
import BoardList from './boardList';
import BoardName from './boardName';
import CreateBoard from './createBoard';

class ToDoApp extends React.Component {

  constructor() {
    super();
    this.state = {
      boardname: "",
    	boards: [],
      createboardstate: <button onClick={this.updateCreateBoardState.bind(this)}>Create new board...</button>

    }
    this.handleInput = this.handleInput.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAppend = this.handleAppend.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleInput(e) {
    this.setState({boardname: e.target.value})
  }

  handleDelete(e, index) {
      this.state.boards.splice(index, 1)
      this.setState({boards: this.state.boards})
  }

  handleAppend() {
    const updatedList = this.state.boards.concat([this.state.boardname])
    this.setState({
      boards: updatedList,
      createboardstate: <button onClick={this.updateCreateBoardState.bind(this)}>Create new board...</button>
    })
  }

  handleEnter(e) {
    if (e.charCode === 13) {
      this.handleAppend()
      this.handleClearInput(e)
    }
  }

  handleClearInput(e) {
    e.target.value = ""
  }

  updateCreateBoardState() {
    this.setState({createboardstate: <BoardName handleInput={this.handleInput} handleAppend={this.handleAppend} handleEnter={this.handleEnter}/>})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col-6">
            2 of 3 (wider)
          </div>
          <div className="col">
            3 of 3
          </div>
        </div>
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col-5">
            2 of 3 (wider)
          </div>
          <div className="col">
            3 of 3
          </div>
        </div>
      </div>
    )
  }
}

export default ToDoApp;
