import React from 'react';
import CreateList from './createList'

class ListOfLists extends React.Component { 

	render() {

		const list = this.props.list.slice(1).map((list, index) => {

			return (
				<div key={index} className="col-3 board-col">
						<button className="btn btn-danger btn-block">{list.listName}</button>
				</div>
			)
		})

		return (
			<div className="row">
				{list}
	      <div className="col-3 board-col">
	      	<CreateList updateList={this.props.updateList}/>
	    	</div>
	    </div>
		)
	}
}

export default ListOfLists;