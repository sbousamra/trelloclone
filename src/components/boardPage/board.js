import React from 'react';
import TitleBar from '../titleBar';
import CreateList from './createList';
import * as lodash from 'lodash';
import axios from 'axios'

class Board extends React.Component {

  render() {

    if (!lodash.isEmpty(this.props.boards)) {
      const board = this.props.boards[this.props.match.params.id]

      const lists = lodash.map(board.lists, function(list, id) {
        console.log(list)
        return (
          <div key={id} className="col-3 board-col">
            <button className="btn btn-danger btn-block">{list.name}</button>
          </div>
        )
      })

      return (
        <div>
          <TitleBar/>
          <div className="container-fluid board-col">
            <div className="row">
            {lists}
              <div className="col-3 board-col">
                <CreateList boardId={this.props.match.params.id} addList={this.props.addList}/>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Board;