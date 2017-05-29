import React from 'react';
import TitleBar from '../titleBar'
import BoardNameList from './boardNameList';

class Home extends React.Component {

  render() {
    return (
      <div>
        <TitleBar/>
        <div className="container-fluid">
          <BoardNameList boards={this.props.boards} addBoard={this.props.addBoard} setBoardIdTracker={this.props.setBoardIdTracker}/>
        </div>
      </div>
    )
  }
}

export default Home;
