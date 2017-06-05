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
    // this.handleDelete = this.handleDelete.bind(this)
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

  // addSubCard(listId, subCard) {
  // }

  // handleDelete(e, id) {
  //   this.setState({boards: delete this.state.boards.id})
  // }

  render() {
    console.log(JSON.stringify(this.state))

    return (
      <Router>
        <div>
          <Route exact path="/" component={(props) => <Home {...props} boards={this.state.boards} addBoard={this.addBoard}/>}/>
          <Route path="/boards/:id" component={(props) => <Board {...props} boards={this.state.boards} addList={this.addList}/>}/>
        </div>
      </Router>
    )
  }
}

export default App;

// When the page loads you make a get request to /boards and you get back all the boards for the user.
// You save this in the local state to it propogates to all the components.
// 
// WHen you add a board, all you need to do is send a post to the server with that board.
// The server will either accept it and return a 200 with all the boards or an error 400.
// On the client side just bind to the response for that post and set the board props to be the response that comes back if successful.
// If its an error, show an error somewhere.










