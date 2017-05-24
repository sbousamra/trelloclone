import React from 'react';
import TitleBar from '../titleBar';
import ListOfLists from './listOfLists';
import * as lodash from 'lodash';

class Board extends React.Component {

	constructor() {
		super();
		this.state = {
			lists: {}
		}
		this.addList = this.addList.bind(this)
		this.addSubCard = this.addSubCard.bind(this)
		this.randId = this.randId.bind(this)
	}


	addList(name) {
		const randId = this.randId()
		const updatedList = lodash.extend(this.state.lists, {[randId]: name} )
    this.setState({
      lists: updatedList
    })
  }

  addSubCard(content) {
  	const randId = this.randId()
		const updatedList = lodash.extend(this.state.lists.name, {[randId]: content} )
		this.setState({
      lists: updatedList
    })
  }

  randId() {
		return Math.random().toString(36).substr(2, 10);
	}

	render() {

		console.log(this.state.lists)

		return (
			<div>
				<TitleBar/>
				<div className="container-fluid board-col">
					<ListOfLists lists={this.state.lists} addList={this.addList} addSubCard={this.addSubCard}/>
				</div>
			</div>
		)
	}
}

export default Board;