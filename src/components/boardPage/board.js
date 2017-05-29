import React from 'react';
import TitleBar from '../titleBar';
import ListOfLists from './listOfLists';
import * as lodash from 'lodash';

class Board extends React.Component {

  render() {
    return (
      <div>
        <TitleBar/>
        <div className="container-fluid board-col">
          <ListOfLists board={this.props.board} addList={this.props.addList} addSubCard={this.props.addSubCard}/>
        </div>
      </div>
    )
  }
}

export default Board;