import React from 'react';
import TitleBar from '../titleBar';
import CreateList from './createList';
import CreateCard from './createCard';
import * as lodash from 'lodash';
import axios from 'axios'

class Board extends React.Component {

  render() {

    if (!lodash.isEmpty(this.props.boards)) {
      const boardId = this.props.match.params.id
      const board = this.props.boards[boardId]

      const lists = lodash.map(board.lists, function(list, id) {
        return (
          <div key={id} className="col-3 board-col">
            <button className="btn btn-danger btn-block">{list.name}</button>
            <CreateCard boardId={boardId} listId={id} addCard={this.props.addCard}/>
          </div>
        )
      }.bind(this))

      return (
        <div>
          <TitleBar/>
          <div className="container-fluid board-col">
            <div className="row">
            {lists}
              <div className="col-3 board-col">
                <CreateList boardId={boardId} addList={this.props.addList}/>
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