import React, { Component } from 'react';

//This guy creates a new Todo.

class TodoForm extends Component {
	render() {
		return (
			<div>
				<input placeholder="What do you have to do today?" size="27" onChange={this.props.handleInput} onKeyPress={this.props.handleEnter}/>
				<input type="submit" onClick={this.props.handleAppend}/>
			</div>
		);
	}
}

export default TodoForm;
