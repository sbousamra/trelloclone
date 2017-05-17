import React from 'react';
import TitleBar from '../titleBar'
import BoardList from './boardNameList';
import * as lodash from 'lodash'
class Home extends React.Component {

  constructor() {
    super();
    this.state = {
    	// boards: [
     //    { name: "Tutorial Board (Start Here!)", important: true, id: "" }
     //  ]

      boards: { 
        "D923381A-63DD-492F-B060-D424E01C449E": {
          name: "Tutorial Board (Start Here!)", 
          important: true
        }
      }
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.addBoard = this.addBoard.bind(this)
  }

  // put this some where reusable
  randId() {
    return Math.random().toString(36).substr(2, 10);
  }

  addBoard(board) {
    // generate a random board Id
    const boardId = this.randId()
    // use lodash.extend to combine two objects immutably
    const updatedBoardsObj = lodash.extend(this.state.boards, { boardId : board })
    // update the entire boards object
    this.setState({
      boards: updatedBoardsObj
    })
  }

  // probs wrong
  handleDelete(board) {
    const updatedBoardsObj = lodash.omit(board.id)
    this.setState({boards: updatedBoardsObj})
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

export default Home;
