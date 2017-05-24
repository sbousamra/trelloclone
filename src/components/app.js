import React from 'react';
import Home from './homePage/home';
import Board from './boardPage/board';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as lodash from 'lodash';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      boards:
        { 0: {
          name: "Tutorial Board (Start Here!)", important: true, id: "" 
        }
      }
    }
    this.addBoard = this.addBoard.bind(this)
    this.randId = this.randId.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
  }

  addBoard(name) {
    const randId = this.randId()
    const updatedBoard = lodash.extend(this.state.boards, {[randId]: name} )
    this.setState({
      boards: updatedBoard
    })
  }

  randId() {
    return Math.random().toString(36).substr(2, 10);
  }

  // handleDelete(e, id) {
  //   this.setState({boards: delete this.state.boards.id})
  // }

  render() {
    const home = <Home boards={this.state.boards} addBoard={this.addBoard}/>
    const board = <Board boards={this.state.boards}/>

    return (
      <Router>
        <div>
          <Route exact path="/" component={() => home}/>
          <Route path="/boards/:id" component={() => board}/>
        </div>
      </Router>
    )
  }
}

export default App;