import React from 'react';
import Home from './homePage/home';
import Board from './boardPage/board';
import Signup from './signupPage/signup';
import Login from './loginPage/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    this.userSignup = this.userSignup.bind(this)
    this.userLogin = this.userLogin.bind(this)
  }

  // componentDidMount() {
  //   axios.get('/boards').then((res) => {
  //     this.setState({
  //       boards: res.data
  //     })
  //   })
  // }

  addBoard(user, board) {
    axios.post('/' + user + '/boards', board).then((res) => {
      this.setState({
        boards: res.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  addList(user, boardId, list) {
    axios.post('/' + user + '/boards/' + boardId + '/lists', list).then((res) => {
      this.setState({
        boards: res.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  addCard(user, boardId, listId, Card) {
    axios.post('/' + user + '/boards/' + boardId + '/lists/' + listId + '/cards', Card).then((res) => {
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

  userSignup(userAndPass) {
    axios.post('/signup', userAndPass).then().catch((error) => {
      console.log(error)
    })
  }

  userLogin(userAndPass) {
    axios.post('/login', userAndPass).then((res) => {
      this.setState({
        boards: res.data
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    console.log(this.state)
    return (
      <Router>
        <div>
          <Route exact path="/" component={(props) => <Home {...props} boards={this.state.boards} isLoggedIn={this.state.isLoggedIn} addBoard={this.addBoard}/>}/>
          <Route path="/boards/:boardId" component={(props) => <Board {...props} boards={this.state.boards} addList={this.addList} addCard={this.addCard} userSignup={this.userSignup}/>}/>
          <Route path="/signup" component={(props) => <Signup {...props} userSignup={this.userSignup}/>}/>
          <Route path="/login" component={(props) => <Login {...props} userLogin={this.userLogin}/>}/>
        </div>
      </Router>
    )
  }
}

export default App;










