import React from 'react';
import TitleBar from '../titleBar';
import ListOfLists from './listOfLists';

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
				<div className="container-fluid">
					<h3>{this.props.match.params.id}</h3>
					<ListOfLists list={this.state.list} updateList={this.updateList}/>
				</div>
			</div>
		)
	}
}

export default Board;