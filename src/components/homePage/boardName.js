import React from 'react';

class BoardName extends React.Component {
  render() {
    return (
      <div className="card">
          <div className="text-center"><div className="card-header">Create Board</div></div>
          <div className="card-block">
            <h5 className="card-subtitle mb-2">Title</h5>
            <input className="form-control" onChange={this.props.handleInput} onKeyPress={this.props.handleEnter}/>
            &nbsp;
            <h5 className="card-subtitle mb-2">Team</h5>
            <p className="card-text">
              Teams make sharing and working within a group even easier. It doesn’t look like you are a member of any teams.
              <a href="#"> Create a team.</a>
            </p>
            <button className="btn btn-success" onClick={this.props.handleAppend}>Create</button>
        </div>
      </div>
      
    )
  }
}

export default BoardName;