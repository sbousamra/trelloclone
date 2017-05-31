import React from 'react';
import Home from './homePage/home';
import Board from './boardPage/board';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as lodash from 'lodash';
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      boards: {}
    }
    this.addBoard = this.addBoard.bind(this)
    this.addList = this.addList.bind(this)
    this.addSubCard = this.addSubCard.bind(this)
    this.setBoardIdTracker = this.setBoardIdTracker.bind(this)
    this.randId = this.randId.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get("http://localhost:9000/boards").then((res) => {
      this.setState({
        boards: res.data,
        boardIdTracker: ""
      })
    })
  }

  addBoard(board) {
    const randId = this.randId()
    const updatedBoard = lodash.extend(this.state.boards, {[randId]: board} )
    this.setState({
      boards: updatedBoard
    })

    axios.post('/', this.state.boards).then((res) => {
      return console.log(res.data)   
    })
  }

  addList(list) {
    const randId = this.randId()
    const updatedList = lodash.extend(this.state.boards[this.state.boardIdTracker].lists, {[randId]: list})
    this.setState({
      boards: updatedList
    })
  }

  addSubCard(listId, subCard) {
    const randId = this.randId()
    const updatedSubCard = lodash.extend(this.state.boards[this.state.boardIdTracker].lists[listId].subCards, {[randId]: subCard})
    this.setState({
      boards: updatedSubCard
    })
  }

  setBoardIdTracker(id) {
    this.setState({
      boardIdTracker: id
    })
  }

  randId() {
    return Math.random().toString(36).substr(2, 10);
  }

  // handleDelete(e, id) {
  //   this.setState({boards: delete this.state.boards.id})
  // }

  render() {
    console.log(JSON.stringify(this.state))
    const home = <Home boards={this.state.boards} addBoard={this.addBoard} setBoardIdTracker={this.setBoardIdTracker}/>
    const board = <Board board={this.state.boards[this.state.currentBoardId]} addList={this.addList} addSubCard={this.addSubCard}/>

    return (
      <Router>
        <div>
          <Route exact path="/" component={() => home}/>
          <Route path="/boards/:id" component={() => board}/>
        </div>
      </Router>
    )
  }
}

export default App;