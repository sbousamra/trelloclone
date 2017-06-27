import React from 'react';

class TitleBar extends React.Component {

  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    if (this.props.loggedin) {
      return <a className="nav-link"><button className="btn btn-primary btn-info" onClick={this.props.handleLogout}>Logout</button></a>
    } else {
      return <a className="nav-link" href="/login"><button className="btn btn-info">Login</button></a>
    }
  }

  render() {

    const boardsDropdown =
      <div className="dropdown"> 
        <button className="btn btn-primary btn-outline-info dropdown-toggle" id="boardsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Boards
        </button>
        <div className="dropdown-menu" aria-labelledby="boardsDropdown">
          <a className="dropdown-item">Test</a>
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
              <a className="nav-link" href="/signup"><button className="btn btn-info">Sign Up</button></a>
              {this.handleLogout()}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default TitleBar;
