import React from 'react';

class BoardName extends React.Component {
	render() {
		return (
      <div className="card">
        <div className="card w-25">
          <div className="card-block">
            <h4 className="card-title">Create Board</h4>
            <h5 className="card-header">Title</h5>
            <input className="form-control" onChange={this.props.handleInput} onKeyPress={this.props.handleEnter}/>
            <p className="card-text">
              Teams make sharing and working within a group even easier. It doesn’t look like you are a member of any teams.
              <a href="#"> Create a team.</a>
            </p>
          </div>
        </div>
      </div>
      
  	)
	}
}

export default BoardName;
