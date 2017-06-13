import React from 'react';

class TitleBar extends React.Component {

  constructor() {
    super();
    this.state = {
      user: "",
      password: ""
    }
  }

  userSignup() {
    const newUser = {
      username: this.state.user,
      password: this.state.password
    }
    this.props.userSignup(newUser)
    this.setState({
      user: "",
      password: ""
    })
  }

  handleUserInput(e) {
    this.setState({
      user: e.target.value
    })
  }

  handlePasswordInput(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {

    const boardsDropdown =
      <div className="dropdown"> 
        <button className="btn btn-primary btn-outline-warning dropdown-toggle" id="boardsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Boards
        </button>
        <div className="dropdown-menu" aria-labelledby="boardsDropdown">
          <a className="dropdown-item">Test</a>
        </div>
      </div>

    return (
      <div className="container-fluid titlebar-bgcolor">
        <nav className="navbar navbar-toggleable-md navbar-inverse titlebar-bgcolor">
        <div className="col-1">
          {boardsDropdown}
        </div>
        <div className="col-4">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
              <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
          <div className="col-5">
            <a href="/">
              <img src="https://a.trellocdn.com/images/01ef898811a879595cea8ac3cd77a155/header-logo-2x.png" className="img-fluid" alt="Responsive"/>
            </a>
          </div>
          <div className="col-md-auto">
            <ul className="navbar-nav">
              <a className="nav-link" href="#"><button className="btn btn-primary btn-outline-warning">+</button></a>
              <a className="nav-link" href="#"><button className="btn btn-primary btn-outline-info">Sign Up</button></a>
              <a className="nav-link" href="#"><button className="btn btn-primary btn-outline-info">Login</button></a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default TitleBar;
