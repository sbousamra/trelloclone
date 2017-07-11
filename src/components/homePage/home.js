import React from 'react';
import classNames from 'classnames';
import * as lodash from 'lodash';
import TitleBar from '../titleBar';
import CreateBoard from './createBoard';

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

    const mappedBoards = lodash.map(this.props.boards, (board, id) => {

      const buttonClassNames = classNames({
        "btn": true,
        "btn-lg": true,
        "btn-primary": true,
        "btn-block": true,
        "btn-board": true,
        "btn-info": board.important
      })

      return (
        <div key={id} className="col-3 board-col">
        <button type="button" className="close fa-pull-topright font-white" onClick={() => this.props.handleDelete(id)}>
          <span aria-hidden="true">&times;</span>
        </button>
          <a className="link-nounderline" href={"/boards/" + id}>
            <button type="button" className={buttonClassNames}>
              {board.name}
            </button>
          </a>
        </div>
      )
    })

    if (this.props.loggedin) {
      return (
        <div>
          <TitleBar boards={this.props.boards} userSignup={this.props.userSignup} userLogin={this.props.userLogin} loggedin={this.props.loggedin} userLogout={this.props.userLogout}/>
          <div className="container-fluid">
            <div className="row">
              {mappedBoards}
              <div className="col-3 board-col">
                <CreateBoard addBoard={this.props.addBoard}/>
              </div>
            </div>
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
