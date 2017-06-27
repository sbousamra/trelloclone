import React from 'react';
import TitleBar from '../titleBar'
import BoardNameList from './boardNameList';

class Home extends React.Component {

  render() {
    return (
      <div>
        <TitleBar loggedin={this.props.loggedin} handleLogout={this.props.handleLogout}/>
        <div className="container-fluid">
          <BoardNameList boards={this.props.boards} addBoard={this.props.addBoard}/>
        </div>
      </div>
    )
  }
}

export default Home;
