import React from 'react';
import TitleBar from '../titleBar'
import BoardNameList from './boardNameList';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
    	boards: [
        { name: "Tutorial Board (Start Here!)", important: true, id: "" }
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
          <BoardNameList boards={this.state.boards} addBoard={this.addBoard}/>
        </div>
      </div>
    )
  }
}

export default Home;
