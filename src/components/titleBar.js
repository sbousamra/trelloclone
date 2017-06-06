import React from 'react';

class TitleBar extends React.Component {
  render() {
    return (
      <div className="container-fluid titlebar-bgcolor">
        <nav className="navbar navbar-toggleable-md navbar-inverse titlebar-bgcolor">
        <div className="col-1">
          <a className="navbar-brand" href="#"><button className="btn btn-primary btn-outline-warning">Boards</button></a>
        </div>
        <div className="col-4">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
              <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
          <div className="col-3">
            <a href="/">
              <img src="https://a.trellocdn.com/images/01ef898811a879595cea8ac3cd77a155/header-logo-2x.png" className="img-fluid" alt="Responsive"/>
            </a>
          </div>
          <div className="col-1">
            <ul className="navbar-nav">
              <a className="nav-link" href="#"><button className="btn btn-primary btn-outline-warning">+</button></a>
              <a className="nav-link" href="#"><button className="btn btn-primary btn-outline-warning">Sebastian Bou-Samra</button></a>
              <a className="nav-link" href="#"><button className="btn btn-primary btn-outline-warning">i</button></a>
              <a className="nav-link" href="#"><button className="btn btn-primary btn-outline-warning">bell</button></a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default TitleBar;
