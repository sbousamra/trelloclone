import React from 'react';
import TitleBar from '../titleBar';
import ListOfLists from './listOfLists';
import * as lodash from 'lodash';
import axios from 'axios'

class Board extends React.Component {

  render() {
    return (
      <div>
        <TitleBar/>
        <div className="container-fluid board-col">
          <ListOfLists {...this.props} boards={this.props.boards} addList={this.props.addList}/>
        </div>
      </div>
    )
  }
}

export default Board;