import React from 'react';

class CreateCard extends React.Component {

  constructor() {
    super();
    this.state = {
      card: "",
      isToggled: false
    }
    this.handleInput = this.handleInput.bind(this)
    this.toggle = this.toggle.bind(this)
    this.addCard = this.addCard.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  handleInput(e) {
    this.setState({
      card: e.target.value
    })
  }

  toggle(e) {
    this.setState({
      isToggled: true
    })
  }


  addCard() {
    const newCard = {
      name: this.state.card
    }
    this.props.addCard(this.props.boardId, this.props.listId, newCard)
    this.setState({
      name: "",
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
      <div className="card card-inverse">
        <div className="card-block">
          <input placeholder="Add a card..." className="form-control" value={this.state.card} onChange={this.handleInput} onKeyPress={this.handleEnter}/>
          <button className="btn btn-success savebtn-spacing" onClick={this.addCard}>Add</button>
        </div>
      </div>

    if (!this.state.isToggled) {
      return (
        <div>
          <button className="btn btn-secondary btn-block" onClick={this.toggle}>Add a card...</button>
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

export default CreateCard;