import React from 'react';
import TitleBar from '../titleBar';
import ListOfLists from './listOfLists';

class Board extends React.Component {

	constructor() {
		super();
		this.state = {
			list: [ { listName: "",  subCards: [ { subCard: "" } ] } ]
		}
			this.updateList = this.updateList.bind(this)
			this.updateSubCardList = this.updateSubCardList.bind(this)
			this.handleDelete = this.handleDelete.bind(this)
	}


	updateList(content) {
    const updatedList = this.state.list.concat([content])
    this.setState({
      list: updatedList
    })
  }

  updateSubCardList(content) {
    const updatedSubCardList = this.state.list.subCards.concat([content])
    this.setState({
      subCards: updatedSubCardList
    })
  }

  handleDelete(e, index) {
    this.state.list.splice(index, 1)
    this.setState({list: this.state.list})
  }

	render() {

		console.log(this.state.list)

		return (
			<div>
				<TitleBar/>
				<div className="container-fluid board-col">
					<h3>{this.props.match.params.id}</h3>
					<ListOfLists list={this.state.list} updateList={this.updateList} updateSubCardList={this.updateSubCardList}/>
				</div>
			</div>
		)
	}
}

export default Board;