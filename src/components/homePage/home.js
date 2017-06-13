import React from 'react';
import TitleBar from '../titleBar'
import BoardNameList from './boardNameList';

class Home extends React.Component {

  render() {
    if (this.props.signedIn === true) {
      return (
        <div className="boardpage-bgcolor">
          <TitleBar/>
          <div className="container-fluid">
            <BoardNameList boards={this.props.boards} addBoard={this.props.addBoard}/>
          </div>
        </div>
      )
    } else {
      return (
        <div className="boardpage-bgcolor">
          <TitleBar/>
        </div>)
    }
  }
}

export default Home;
