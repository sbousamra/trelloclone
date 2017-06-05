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
    this.addCard = this.addCard.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:9000/boards').then((res) => {
      this.setState({
        boards: res.data
      })
    })
  }

  addBoard(board) {
    axios.post('/boards', board).then((res) => {
      this.setState({
        boards: res.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  addList(boardId, list) {
    axios.post('/boards/' + boardId + '/lists', list).then((res) => {
      this.setState({
        boards: res.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  addCard(boardId, listId, Card) {
    axios.post('/boards/' + boardId + '/lists/' + listId + '/cards', Card).then((res) => {
      this.setState({
        boards: res.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  handleDelete(e, id) {
    this.setState({boards: delete this.state.boards.id})
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={(props) => <Home {...props} boards={this.state.boards} addBoard={this.addBoard}/>}/>
          <Route path="/boards/:boardId" component={(props) => <Board {...props} boards={this.state.boards} addList={this.addList} addCard={this.addCard}/>}/>
        </div>
      </Router>
    )
  }
}

export default App;










