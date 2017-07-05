import React from 'react';
import TitleBar from '../titleBar'
import BoardNameList from './boardNameList';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.userSignup = this.userSignup.bind(this)
    this.userLogin = this.userLogin.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
  } 

  userSignup() {
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.userSignup(newUser)
    this.setState({
      username: "",
      password: ""
    })
  }

  userLogin() {
    const existingUser = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.userLogin(existingUser)
    this.setState({
      username: "",
      password: ""
    })
  }

  handleUserInput(e) {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordInput(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    if (this.props.loggedin) {
      return (
        <div>
          <TitleBar boards={this.props.boards} userSignup={this.props.userSignup} userLogin={this.props.userLogin} loggedin={this.props.loggedin} userLogout={this.props.userLogout}/>
          <div className="container-fluid">
            <BoardNameList boards={this.props.boards} addBoard={this.props.addBoard}/>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <TitleBar boards={this.props.boards} userSignup={this.props.userSignup} userLogin={this.props.userLogin} loggedin={this.props.loggedin} userLogout={this.props.userLogout}/>
          <div className="jumbotron home-textcolor">
            <div className="container-fluid">
              <div className="row">
                <div className="col-3">
                </div>
                <div className="col-md">
                  <h1>Welcome back to Bass's Trello!</h1>
                </div>
              </div>
              <div className="row text-center board-col">
                <div className="col-3">
                </div>
                <div className="col-5">
                  <h1>Log in to Trello</h1>
                </div>
              </div>
              <div className="row board-col">
                <div className="col-3">
                </div>
                <div className="col-5">
                  <div className="input-group">
                    <input type="text" className="form-control" onChange={this.handleUserInput} placeholder="e.g. Bass"/>
                  </div>
                  <div className="input-group board-col">
                    <input type="password" className="form-control" onChange={this.handlePasswordInput} placeholder="e.g. ******"/>
                  </div>
                  <div className="text-center board-col">
                    <button className="btn btn-success btn-lg" onClick={this.userLogin}>Log In</button>
                  </div>
                </div>    
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Home;
