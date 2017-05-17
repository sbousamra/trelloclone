import React from 'react';
import CreateList from './createList';
import CreateSubCard from './createSubCard';
import _ from 'lodash';

class ListOfLists extends React.Component { 

	render() {

		const subLists = _.mapValues ( this.props.lists.subcards, function(subCard, key) {
			return (
				subCard + key
			)
		})

		return (
			<div className="row">
	      <div className="col-3 board-col">
	      	<CreateList lists={this.props.lists} updateList={this.props.updateList}/>
	    	</div>
	    </div>
		)
	}
}

export default ListOfLists;