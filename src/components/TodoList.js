import React from 'react';

//This guy renders a list of Todos.

class TodoList extends React.Component { 

	render() {

		const list = this.props.todos.map((todo, index) => {
			return <div key={index}><button onClick={click => this.props.handleDelete(index)} size="50">{todo}</button></div>
		})

		return (
			<div>
				{list}
			</div>
		)
	}
}

export default TodoList;