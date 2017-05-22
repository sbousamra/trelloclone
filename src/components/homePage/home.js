import React from 'react';
import TitleBar from '../titleBar'
import BoardNameList from './boardNameList';
import * as lodash from 'lodash';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
    	boards:
        { 0: {
          name: "Tutorial Board (Start Here!)", important: true, id: "" 
        }
      }
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.addBoard = this.addBoard.bind(this)
    this.randId = this.randId.bind(this)
  }

  addBoard(name) {
    const randId = this.randId()
    const updatedBoard = lodash.extend(this.state.boards, {[randId]: name} )
    this.setState({
      boards: updatedBoard
    })
  }

  randId() {
    return Math.random().toString(36).substr(2, 10);
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
