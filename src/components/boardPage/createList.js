import React from 'react';
import _ from 'lodash';

class CreateList extends React.Component {

	constructor() {
		super();
		this.state = {
			name: "",
			isToggled: false
		}
		this.handleInput = this.handleInput.bind(this)
		this.toggle = this.toggle.bind(this)
		this.addList = this.addList.bind(this)
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
	  	name: this.state.name
  	}
  	this.props.addList(newList)
	  this.setState({
	    name: "",
	    isToggled: false
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