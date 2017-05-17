import React from 'react';

class CreateSubCard extends React.Component {

	constructor() {
		super();
		this.state = {
			subCard: "",
			subCardId: 0,
			isToggled: false
		}
		this.handleInput = this.handleInput.bind(this)
		this.toggle = this.toggle.bind(this)
		this.addCard = this.addCard.bind(this)
		this.handleEnter = this.handleEnter.bind(this)
	}

	handleInput(e) {
    this.setState({
    	subCard: e.target.value
    })
  }

	toggle(e) {
		this.setState({
			isToggled: true
		})
	}

  addCard() {
  	const newCard = {
  		// this.state.subCardId: {
  		// 	subCard: this.state.subCard
  		// }
  	}
  	this.props.addSubCard(this.state.subCardId, newCard)
	  this.setState({
	    subCard: "",
	    subCardId: this.state.subCardId + 1,
	    isToggled: false
	  })
  }

  handleEnter(e) {
	  if (e.charCode === 13) {
	    this.addCard()
	  }
  }

	render() {

		const newCard = 
			<div className="card card-inverse card-danger">
	      <div className="card-block">
	        <input placeholder="Add a card..." className="form-control" value={this.state.subCard} onChange={this.handleInput} onKeyPress={this.handleEnter}/>
	        <button className="btn btn-success savebtn-spacing" onClick={this.addCard}>Add</button>
	      </div>
	    </div>

	  if (!this.state.isToggled) {
	  	return (
	  		<div>
	  			<button className="btn btn-secondary btn-lg btn-block" onClick={this.toggle}>Add a card...</button>
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

export default CreateSubCard;