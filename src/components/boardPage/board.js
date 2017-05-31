import React from 'react';
import TitleBar from '../titleBar';
import ListOfLists from './listOfLists';
import * as lodash from 'lodash';
import axios from 'axios'

class Board extends React.Component {

  constructor() {
    super();
    this.postBoard = this.postBoard.bind(this)
  }

  postBoard() {
    axios.post("http://localhost:9000/boards/:id", "testpost").then((res) => {
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <TitleBar/>
        <div className="container-fluid board-col">
          <ListOfLists board={this.props.board} addList={this.props.addList} addSubCard={this.props.addSubCard}/>
          <button onClick={this.postBoard}>Hey</button>
        </div>
      </div>
    )
  }
}

export default Board;