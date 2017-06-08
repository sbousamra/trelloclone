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
            <div className="card card-inverse boardpage-cardspacing boardpage-cardbgcolor">
              <div className="card-block boardpage-cardbgcolor">
                <p className="font-black">
                  {card.name}
                </p>
              </div>
            </div>
          )
        })

        const newList = 
          <div className="card card-inverse boardpage-listborder">
            <div className="card-block boardpage-listbgcolor boardpage-cardborder">
              <h4 className="font-black font-chalkboard text-center boardpage-listnamespacing"> {list.name} </h4>
              {cards}
              <CreateCard boardId={boardId} listId={listId} addCard={this.props.addCard}/>
            </div>
          </div>

        return (
          <div key={listId} className="col-3 board-col">
            {newList}
          </div>
        )
        
      })

      return (
        <div className="boardpage-bgcolor">
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