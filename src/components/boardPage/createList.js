import React from 'react';

class CreateList extends React.Component {

	constructor() {
		super();
		this.state = {
			listName: "",
			subCards:[],
			isToggled: false
		}
		this.handleInput = this.handleInput.bind(this)
		this.toggle = this.toggle.bind(this)
		this.addBoard = this.addBoard.bind(this)
		this.handleEnter = this.handleEnter.bind(this)
	}

	handleInput(e) {
    this.setState({
    	listName: e.target.value
    })
  }

	toggle(e) {
		this.setState({
			isToggled: true
		})
	}

  addBoard() {
  	const newBoard = {
  		listName: this.state.listName,
  		subCards: this.state.subCards
  	}
  	this.props.updateList(newBoard)
	  this.setState({
	    listName: "",
	    isToggled: false
	  })
  }

  handleEnter(e) {
	  if (e.charCode === 13) {
	    this.addBoard()
	  }
  }

	render() {
		const newCard = 
			<div className="card card-inverse card-danger">
	      <div className="card-block">
	        <input placeholder="Add a list..." className="form-control" value={this.state.name} onChange={this.handleInput} onKeyPress={this.handleEnter}/>
	        <button className="btn btn-success savebtn-spacing" onClick={this.addBoard}>Save</button>
	      </div>
	    </div>

	  if (!this.state.isToggled) {
	  	return (
	  		<div>
	  			<button className="btn btn-secondary btn-lg btn-block" onClick={this.toggle}>Add a list...</button>
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