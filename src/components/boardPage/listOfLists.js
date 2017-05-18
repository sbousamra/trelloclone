import React from 'react';
import CreateList from './createList';
import CreateSubCard from './createSubCard';
import * as lodash from 'lodash';

class ListOfLists extends React.Component { 

	render() {

		const lists = lodash.mapValues(this.props.lists, function(id) {
			return (
				<div className="col-3 board-col">
						<button className="btn btn-danger btn-block">{id.name}</button>
				</div>
			)
		})

		return (
			<div className="row">
				{lists}
	      <div className="col-3 board-col">
	      	<CreateList lists={this.props.lists} addList={this.props.addList}/>
	    	</div>
	    </div>
		)
	}
}

export default ListOfLists;