import React from 'react';
import CreateBoard from './createBoard'
import classNames from 'classnames'

class BoardList extends React.Component { 

	render() {

		const list = this.props.boards.map((board, index) => {

			const buttonClassNames = classNames({
				"btn": true,
				"btn-primary": true,
				"btn-lg": true,
				"btn-block": true,
				"btn-board": true,
				"btn-info": board.important
			})

			return (
				<div key={index} className="col-3 board-col">
					<a href={board.name}>
						<button className={buttonClassNames}>{board.name}</button>
					</a>
				</div>
			)
		})

		return (
			<div className="row">
				{list}
	      <div className="col-3 board-col">
	      	<CreateBoard addBoard={this.props.addBoard}/>
	    	</div>
	    </div>
		)
	}
}

export default BoardList;