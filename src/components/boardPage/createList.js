import React from 'react';
import CreateSubCard from './createSubCard';
import _ from 'lodash';

class CreateList extends React.Component {

	constructor() {
		super();
		this.state = {
			listId: 0,
			name: "",
			subCards: {
				subCardId: {
					subCard: ""
				}
			},
			isToggled: false
		}
		this.handleInput = this.handleInput.bind(this)
		this.toggle = this.toggle.bind(this)
		this.addList = this.addList.bind(this)
		this.addSubCard = this.addSubCard.bind(this)
		this.handleEnter = this.handleEnter.bind(this)
	}

	handleInput(e) {
    this.setState({
    	name: e.target.value
    })
  }

	toggle(e) {
		this.setState({
			isToggled: true
		})
	}

  addList() {
  	const newList = {
			this.state.listId: {
	  		name: this.state.name,
	  		subCards: this.state.subCards
  		}
  	}

  	this.props.updateList(this.state.listId, newList)
	  this.setState({
	    name: "",
	    listId: this.state.listId + 1,
	    isToggled: false
	  })
  }

  addSubCard(subCardId, subCard) {
  	this.setState({
  		subCards: this.state.subCards[subCardId] = subCard
  	})
  }

  handleEnter(e) {
	  if (e.charCode === 13) {
	    this.addList()
	  }
  }

	render() {
		const newCard = 
			<div className="card card-inverse card-danger">
	      <div className="card-block">
	        <input placeholder="Add a list..." className="form-control" value={this.state.name} onChange={this.handleInput} onKeyPress={this.handleEnter}/>
	        <button className="btn btn-success savebtn-spacing" onClick={this.addList}>Save</button>
	      </div>
	    </div>

	  if (!this.state.isToggled) {
	  	return (
	  		<div>
	  			<button className="btn btn-secondary btn-lg btn-block" onClick={this.toggle}>Add a list...</button>
	  			<CreateSubCard addSubCard={this.addSubCard}/>
	  		</div>
	  	)
	  } else {
	  	return (
	  		<div>
	  			{newCard}
	  		</div>
	  	)
	  }
	}
}

export default CreateList;