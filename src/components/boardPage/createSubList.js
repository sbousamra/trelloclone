import React from 'react';

export class createSubList extends React.Component {
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
	  			<button className="btn btn-secondary btn-m btn-block" onClick={this.toggle}>Create new board...</button>
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
