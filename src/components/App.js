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
      createboardstate: <button className="askfornewboardbutton" onClick={this.updateCreateBoardState.bind(this)}>Create new board...</button>

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
      createboardstate: <button className="askfornewboardbutton" onClick={this.updateCreateBoardState.bind(this)}>Create new board...</button>
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
      <div>
        <TitleBar/>
        <div className="body">
          <CreateBoard createBoardState={this.state.createboardstate}/>
          <BoardList boards={this.state.boards} handleDelete={this.handleDelete}/>
        </div>
      </div>
    )
  }
}

export default ToDoApp;
