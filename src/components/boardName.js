import React from 'react';

class BoardName extends React.Component {
	render() {
		return (
        <div className="createnewboardbutton">
          <h4 className="boardcreateheader"> Create Board </h4>
          <hr/>
          <h4 className="boardtitleheader"> Title </h4>
          <input className="boardinput" placeholder="  Like 'Bucket List' for example..." onChange={this.props.handleInput} onKeyPress={this.props.handleEnter}/>
          <br/>
          <h4 className="boardteamheader">Team</h4>
          <p className="boardteamp">Teams make sharing and working within a group even easier. It doesn’t look like you are a member of any teams. 
            <a className="boardcreateteamlink" href="www.google.com"> Create a team. </a>
          </p>
          <button className="boardcreatebutton" onClick={this.props.handleAppend}> Create </button>
        </div>
  	)
	}
}

export default BoardName;
