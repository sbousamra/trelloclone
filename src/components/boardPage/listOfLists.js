import React from 'react';
import CreateList from './createList';
import CreateSubCard from './createSubCard';
import _ from 'lodash';

class ListOfLists extends React.Component { 

	render() {

		// const lists = _.mapValues( this.props.lists.boards, function(board, key) {
		// 	return (
		// 		<div key={key} className="col-3 board-col">
		// 				<button className="btn btn-danger btn-block">{board.name}</button>
		// 		</div>
		// 	)
		// })

		// const subLists = _.mapValues ( this.props.lists.subcards, function(subCard, key) {
		// 	return (
		// 		subCard + key
		// 	)
		// })

		return (
			<div className="row">
	      <div className="col-3 board-col">
	      	<CreateList lists={this.props.lists} addList={this.props.addList}/>
	    	</div>
	    </div>
		)
	}
}

export default ListOfLists;