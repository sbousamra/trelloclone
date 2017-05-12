import React from 'react';
import TitleBar from '../titleBar';
import CreateList from './createList';

class Board extends React.Component {

	constructor() {
		super();
		this.state = {
			list: [ { listName: "", cards: { description: "" } }]
		}
			this.updateList = this.updateList.bind(this)
			this.handleDelete = this.handleDelete.bind(this)
	}


	updateList(content) {
    const updatedList = this.state.list.concat([content])
    this.setState({
      list: updatedList
    })
  }

  handleDelete(e, index) {
    this.state.list.splice(index, 1)
    this.setState({list: this.state.list})
  }

	render() {

		console.log(this.state)

		return (
			<div>
				<TitleBar/>
				<div className="col-3 board-col">
					<h3>{this.props.match.params.id}</h3>
					<CreateList updateList={this.updateList} handleDelete={this.handleDelete}/>
				</div>
			</div>
		)
	}
}

export default Board;