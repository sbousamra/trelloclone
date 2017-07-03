import React from 'react';
import TitleBar from '../titleBar';
import CreateList from './createList';
import CreateCard from './createCard';
import * as lodash from 'lodash';

class Board extends React.Component {

  render() {

    const boardId = this.props.match.params.boardId
    const board = this.props.boards[boardId]

    if (!lodash.isEmpty(this.props.boards)) {

      const lists = lodash.map(board.lists, (list, listId) => {

        const cards = lodash.map(list.cards, (card, cardId) => {
          return (
            <div key={cardId}>
              <div className="card card-inverse boardpage-cardspacing">
                <div className="card-block">
                  <p className="font-black">
                    {card.name}
                  </p>
                </div>
              </div>
            </div>
          )
        })

        const newList = 
          <div className="card card-inverse boardpage-listbgcolor">
            <div className="card-block">
              <h4 className="text-center boardpage-listnamespacing font-black"> {list.name} </h4>
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
        <div>
          <TitleBar boards={this.props.boards} userSignup={this.props.userSignup} userLogin={this.props.userLogin} loggedin={this.props.loggedin} userLogout={this.props.userLogout}/>
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