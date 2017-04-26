import React from 'react';

class CreateBoard extends React.Component {

	render() {
		return (
			<div>
				<h3 className="personalboardstitle"> Personal Boards </h3>
				{this.props.createBoardState}
			</div>
		);
	}
}

export default CreateBoard;
