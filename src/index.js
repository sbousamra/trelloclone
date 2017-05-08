import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import ToDoApp from './components/app';

ReactDOM.render(
	<Router history={createBrowserHistory}>
		<Route path="/" component={ToDoApp}/>
	</Router>,
	document.getElementById('root')
)
