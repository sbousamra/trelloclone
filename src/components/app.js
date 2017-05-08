import React from 'react';
import TitleBar from './titleBar'
import BoardList from './boardList';
import BoardName from './boardName';
import CreateBoard from './createBoard';

class ToDoApp extends React.Component {

  constructor() {
    super();
    this.state = {
    	boards: [
        { name: "Tutorial Board (Start Here!)", important: true }
      ]
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.addBoard = this.addBoard.bind(this)
  }

  addBoard(board) {
    const updatedList = this.state.boards.concat([board])
    this.setState({
      boards: updatedList
    })
  }

  handleDelete(e, index) {
    this.state.boards.splice(index, 1)
    this.setState({boards: this.state.boards})
  }

  render() {
    return (
      <div>
        <TitleBar/>
        <div className="container-fluid">
          <BoardList boards={this.state.boards} addBoard={this.addBoard}/>
        </div>
      </div>
    )
  }
}

export default ToDoApp;
