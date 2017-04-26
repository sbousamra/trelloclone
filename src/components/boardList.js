import React from 'react';

class BoardList extends React.Component { 

	render() {

		const list = this.props.boards.map((board, index) => {
			return <div key={index}><a href="www.google.com"><button className="board"><span className="boardtext">{board}</span></button></a></div>
		})

		return (
			<div>
				{list}
			</div>
		)
	}
}

export default BoardList;