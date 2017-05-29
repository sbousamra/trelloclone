import React from 'react';

class CreateBoard extends React.Component {

  constructor() {
    super();
    this.state = {
      boardName: "",
      isToggled: false
    }
    this.handleInput = this.handleInput.bind(this)
    this.toggle = this.toggle.bind(this)
    this.addBoard = this.addBoard.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleInput(e) {
    this.setState({
      boardName: e.target.value
    })
  }

  toggle(e) {
    this.setState({
      isToggled: true
    })
  }

  addBoard() {
    const newBoard = {
      name: this.state.boardName,
      lists: {},
      important: false
    }
    this.props.addBoard(newBoard)
    this.setState({
      boardName: "",
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
      <div className="card">
        <div className="text-center"><div className="card-header">Create Board</div></div>
        <div className="card-block">
          <h5 className="card-subtitle mb-2">Title</h5>
          <input placeholder="Create a board..." className="form-control" value={this.state.boardName} onChange={this.handleInput} onKeyPress={this.handleEnter}/>
          &nbsp;
          <h5 className="card-subtitle mb-2">Team</h5>
          <p className="card-text">
            Teams make sharing and working within a group even easier. It doesn’t look like you are a member of any teams.
            <a href="#"> Create a team.</a>
          </p>
          <button className="btn btn-success" onClick={this.addBoard}>Create</button>
        </div>
      </div>

    if (!this.state.isToggled) {
      return (
        <div>
          <button className="btn btn-secondary btn-lg btn-block" onClick={this.toggle}>Create new board...</button>
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

export default CreateBoard;
