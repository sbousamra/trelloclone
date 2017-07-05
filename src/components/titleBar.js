import React from 'react';
import lodash from 'lodash';

class TitleBar extends React.Component {

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
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
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

  handleSignup() {
    return (
      <a className="nav-link">
        <div className="font-black">
          <button type="button" className="btn btn-info" data-toggle="modal" data-target="#signupModal">Signup</button>
          <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="signupModal">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Signup</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">&times;</button>
                </div>
                <div className="modal-body alert alert-dismissable">
                  <form>
                    <div className="form-group">
                      <label className="form-control-label">Username</label>
                      <input onChange={this.handleUserInput} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Password</label>
                      <input onChange={this.handlePasswordInput} type="password" className="form-control"/>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={this.userSignup} data-dismiss="modal">Signup</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    )
  }

  handleLogout() {
    if (this.props.loggedin) {
      return <a className="nav-link"><button className="btn btn-primary btn-info" onClick={this.props.userLogout}>Logout</button></a>
    } else {
      return (
      <a className="nav-link">
        <div className="font-black">
          <button type="button" className="btn btn-info" data-toggle="modal" data-target="#loginModal">Login</button>
          <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Login</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">&times;</button>
                </div>
                <div className="modal-body alert alert-dismissable">
                  <form>
                    <div className="form-group">
                      <label className="form-control-label">Username</label>
                      <input onChange={this.handleUserInput} type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Password</label>
                      <input onChange={this.handlePasswordInput} type="password" className="form-control"/>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={this.userLogin} data-dismiss="modal">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
      )
    }
  }

  render() {

    const boardsToLinks = lodash.map(this.props.boards, function(board, id) {
      return (
        <div key={id}>
          <a href={"/boards/" + id} className="dropdown-item">{board.name}</a>
        </div>
      )
    })

    const boardsDropdown =
      <div className="dropdown"> 
        <button className="btn btn-primary btn-outline-info dropdown-toggle" id="boardsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Boards
        </button>
        <div className="dropdown-menu" aria-labelledby="boardsDropdown">
          {boardsToLinks}
        </div>
      </div>

    return (
      <div className="container-fluid bg-primary">
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
        <div className="col-1">
          {boardsDropdown}
        </div>
        <div className="col-4">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
              <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
          <div className="col-4">
            <a href="/">
              <img src="https://a.trellocdn.com/images/01ef898811a879595cea8ac3cd77a155/header-logo-2x.png" className="img-fluid" alt="Responsive"/>
            </a>
          </div>
          <div className="col-md-auto">
            <ul className="navbar-nav">
              <a className="nav-link col-4"></a>
              <a className="nav-link" href="#"><button className="btn btn-info">+</button></a>
              {this.handleSignup()}
              {this.handleLogout()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default TitleBar;
