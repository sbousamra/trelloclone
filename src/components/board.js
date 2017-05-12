import React from 'react';

class Board extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div>{this.props.match.params.id}</div>
		);
	}
}

export default Board;