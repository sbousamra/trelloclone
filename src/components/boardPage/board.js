import React from 'react';
import TitleBar from '../titleBar';
import ListOfLists from './listOfLists';
import _ from 'lodash';

class Board extends React.Component {

	constructor() {
		super();
		this.state = {
			lists: {}
		}
		this.updateList = this.updateList.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}


	updateList(listId, content) {
    this.setState({
      lists: this.state.lists[listId] = content
    })
  }

  handleDelete(e, index) {
    this.state.list.splice(index, 1)
    this.setState({list: this.state.list})
  }

	render() {

		console.log(this.state.lists)

		return (
			<div>
				<TitleBar/>
				<div className="container-fluid board-col">
					<h3>{this.props.match.params.id}</h3>
					<ListOfLists lists={this.state.lists} updateList={this.updateList}/>
				</div>
			</div>
		)
	}
}

export default Board;