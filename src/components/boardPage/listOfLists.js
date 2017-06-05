import React from 'react';
import CreateList from './createList';
import CreateSubCard from './createSubCard';
import * as lodash from 'lodash';

class ListOfLists extends React.Component { 

  render() {
    const board = this.props.boards[this.props.match.params.id].lists
    console.log(board)

    const lists = lodash.map(board, function(list, id) {
      return (
        <div key={id} className="col-3 board-col">
          <button className="btn btn-danger btn-block">{list}</button>
        </div>
      )
    })

    return (
      <div className="row">
      {lists}
        <div className="col-3 board-col">
          <CreateList addList={this.props.addList}/>
        </div>
      </div>
    )
  }
}

export default ListOfLists;