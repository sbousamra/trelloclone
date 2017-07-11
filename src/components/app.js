import React from 'react';
import * as lodash from 'lodash';
import Home from './homePage/home';
import Board from './boardPage/board';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      boards: {},
      loggedin: false
    }
    this.addBoard = this.addBoard.bind(this)
    this.addList = this.addList.bind(this)
    this.addCard = this.addCard.bind(this)
    this.userSignup = this.userSignup.bind(this)
    this.userLogin = this.userLogin.bind(this)
    this.userLogout = this.userLogout.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get('/boards').then((res) => {
      this.setState({
        boards: res.data,
        loggedin: true
      })
      console.log(this.state)
    }).catch((error) => {
      console.log("Login!")
    })
  }

  addBoard(board) {
    axios.post('/boards', board).then((res) => {
      this.setState({
        boards: res.data
      })
    }).catch((error) => {
      console.log("Not logged in")
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

  userSignup(userAndPass) {
    axios.post('/signup', userAndPass).then().catch((error) => {
      console.log("That username already exists, please choose another!")
    })
  }

  userLogin(userAndPass) {
    axios.post('/login', userAndPass).then((res) => {
      this.setState({
        loggedin: true,
        boards: res.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  userLogout() {
    axios.get('/logout').then((res) => {
      this.setState({
        loggedin: false,
        boards: {}
      })
    })
  }

<<<<<<< HEAD
  handleDelete(boardId) {
    axios.delete('/boards/' + boardId).then((res) => {
      console.log(res.data)
      this.setState({
        boards: res.data
      })
    }).catch((error) => {
      console.log(error)
    })
=======
  handleDelete(id) {
    console.log("IN HANDLE DELETE")
    this.setState({boards: delete this.state.boards[id]})
>>>>>>> f38f20081f20f2d883ffc7851df32af40068ab68
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={(props) => 
            <Home 
              {...props} 
<<<<<<< HEAD
              boards={this.state.boards} 
              addBoard={this.addBoard} 
              userSignup={this.userSignup} 
              userLogin={this.userLogin} 
              loggedin={this.state.loggedin} 
=======
              boards={this.state.boards}
              addBoard={this.addBoard}
              userSignup={this.userSignup}
              userLogin={this.userLogin}
              loggedin={this.state.loggedin}
>>>>>>> f38f20081f20f2d883ffc7851df32af40068ab68
              userLogout={this.userLogout}
              handleDelete={this.handleDelete}
            />}
          />
<<<<<<< HEAD
          <Route path="/boards/:boardId" component={(props) => 
            <Board 
              {...props} 
              boards={this.state.boards} 
              addList={this.addList} 
              addCard={this.addCard} 
              userSignup={this.userSignup} 
              userLogin={this.userLogin} 
              loggedin={this.state.loggedin} 
              userLogout={this.userLogout} 
              handleDelete={this.handleDelete}
            />}
          />
=======
          <Route path="/boards/:boardId" component={(props) => <Board {...props} boards={this.state.boards} addList={this.addList} addCard={this.addCard} userSignup={this.userSignup} userLogin={this.userLogin} loggedin={this.state.loggedin} userLogout={this.userLogout}/>} handleDelete={this.handleDelete}/>
>>>>>>> f38f20081f20f2d883ffc7851df32af40068ab68
        </div>
      </Router>
    )
  }
}

export default App;










