import React from 'react';
import TitleBar from '../titleBar'
import BoardNameList from './boardNameList';

class Home extends React.Component {

  render() {
    return (
      <div>
        <TitleBar boards={this.props.boards} userSignup={this.props.userSignup} userLogin={this.props.userLogin} loggedin={this.props.loggedin} userLogout={this.props.userLogout}/>
        <div className="container-fluid">
          <BoardNameList boards={this.props.boards} addBoard={this.props.addBoard}/>
        </div>
      </div>
    )
  }
}

export default Home;
