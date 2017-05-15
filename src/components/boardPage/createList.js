import React from 'react';

class CreateList extends React.Component {

	constructor() {
		super();
		this.state = {
			name: "",
			isToggled: false
		}
		this.handleInput = this.handleInput.bind(this)
		this.toggle = this.toggle.bind(this)
		this.addBoard = this.addBoard.bind(this)
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

  addBoard() {
  	const newBoard = {
  		listName: this.state.name,
  		cards: { description: ""}
  	}
  	this.props.updateList(newBoard)
	  this.setState({
	    name: ""
	  })
  }

  handleEnter(e) {
	  if (e.charCode === 13) {
	    this.addBoard()
	  }
  }

	render() {
		const newCard = 
			<div className="card">
	      <div className="card-block">
	        <input className="form-control" value={this.state.name} onChange={this.handleInput} onKeyPress={this.handleEnter}/>
	        <p></p>
	        <button className="btn btn-success" onClick={this.addBoard}>Save</button>
	      </div>
	    </div>

	  if (!this.state.isToggled) {
	  	return (
	  		<div>
	  			<button className="btn btn-secondary btn-m btn-block" onClick={this.toggle}>Add a list...</button>
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