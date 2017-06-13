import React from 'react';

class Login extends React.Component {  

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.userLogin = this.userLogin.bind(this)
    this.handleUserInput = this.handleUserInput.bind(this)
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
  }

  userLogin() {
    const existingUser = {
      username: this.state.user,
      password: this.state.password
    }
    this.props.userLogin(existingUser)
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
        <button type="submit" onClick={this.userLogin}>Submit</button>
      </div>
    )
  }
}

export default Login;