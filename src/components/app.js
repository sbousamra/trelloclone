import React from 'react';
import Home from './homePage/home';
import Board from './boardPage/board';
import Signup from './signupPage/signup';
import Login from './loginPage/login';
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
    this.handleDelete = this.handleDelete.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    axios.get('/boards').then((res) => {
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
      console.log(error)
    })
  }

  userLogin(userAndPass) {
    axios.post('/login', userAndPass).then((res) => {
      this.setState({
        boards: res.data,
        loggedin: true
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  handleDelete(e, id) {
    this.setState({boards: delete this.state.boards.id})
  }

  handleLogout() {
    this.setState({loggedin: false})
  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          <Route exact path="/" component={(props) => <Home {...props} boards={this.state.boards} addBoard={this.addBoard} loggedin={this.state.loggedin} handleLogout={this.handleLogout}/>}/>
          <Route path="/boards/:boardId" component={(props) => <Board {...props} boards={this.state.boards} addList={this.addList} addCard={this.addCard} loggedin={this.state.loggedin} handleLogout={this.handleLogout}/>}/>
          <Route path="/signup" component={(props) => <Signup {...props} userSignup={this.userSignup}/>}/>
          <Route path="/login" component={(props) => (
            this.state.loggedin
            ? <Redirect to="/"/> 
            : <Login {...props} userLogin={this.userLogin}/>
          )}/>
        </div>
      </Router>
    )
  }
}

export default App;










