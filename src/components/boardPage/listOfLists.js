import React from 'react';
import CreateList from './createList';
import CreateSubCard from './createSubCard';
import * as lodash from 'lodash';

class ListOfLists extends React.Component { 

  render() {

    const subCard = <CreateSubCard addSubCard={this.props.addSubCard}/>

    const lists = lodash.map(this.props.lists, function(list, id) {
      return (
        <div key={id} className="col-3 board-col">
          <button className="btn btn-danger btn-block">{list.name}</button>
          {subCard}
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