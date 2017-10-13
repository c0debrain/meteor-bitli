import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
	</Router>
);

Meteor.startup(() => {
	render(routes, document.querySelector('.root'));
});
