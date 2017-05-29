import React from 'react';
import CreateList from './createList';
import CreateSubCard from './createSubCard';
import * as lodash from 'lodash';

class ListOfLists extends React.Component { 

  render() {

    const lists = lodash.map(this.props.board, function(list, id) {
      console.log(list)
      return (
        <div key={id} className="col-3 board-col">
          <button className="btn btn-danger btn-block">{list.name}</button>
          <CreateSubCard addSubCard={this.props.addSubCard} id={id}/>
        </div>
      )
    }.bind(this))

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