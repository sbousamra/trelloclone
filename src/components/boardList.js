import React from 'react';

class BoardList extends React.Component { 

	render() {

		const list = this.props.boards.map((board, index) => {
			return <div key={index}><a href="www.google.com"><button className="btn btn-primary btn-lg active">{board}</button></a></div>
		})

		return (
			<div>
				{list}
			</div>
		)
	}
}

export default BoardList;