import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import Board from './components/board';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/board/:id" component={Board}/>
    </div>
  </Router>,
	document.getElementById('root')
)
