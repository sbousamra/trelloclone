import React from 'react';
import TitleBar from '../titleBar';
import CreateList from './createList';
import CreateCard from './createCard';
import * as lodash from 'lodash';
import axios from 'axios'

class Board extends React.Component {

  render() {

    const boardId = this.props.match.params.boardId
    const board = this.props.boards[boardId]

    if (!lodash.isEmpty(this.props.boards)) {

      const lists = lodash.map(board.lists, (list, listId) => {

        const cards = lodash.map(list.cards, (card, cardId) => {
          return (
            <div key={cardId}>
              <button className="btn btn-info btn-block">{card.name}</button>
            </div>
          )
        })

        return (
          <div key={listId} className="col-3 board-col">
            <button className="btn btn-danger btn-block">{list.name}</button>
            {cards}
            <CreateCard boardId={boardId} listId={listId} addCard={this.props.addCard}/>
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