import React from 'react';
import * as lodash from 'lodash';
import axios from 'axios';

class Signup extends React.Component {  

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.userSignup = this.userSignup.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
  }

  userSignup() {
    const newUser = {
      username: this.state.user,
      password: this.state.password
    }
    this.props.userSignup(newUser)
    this.setState({
      username: "",
      password: ""
    })
  }

  handleUserInput(e) {
    this.setState({
      user: e.target.value
    })
  }

  handlePasswordInput(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return(
      <div>
        <input className="form-control mr-sm-2" type="text" placeholder="Username" onChange={this.handleUserInput}/>
        <input className="form-control mr-sm-2" type="text" placeholder="Password" onChange={this.handlePasswordInput}/>
        <button type="submit" onClick={this.userSignup}>Submit</button>
      </div>
    )
  }
}

export default Signup;