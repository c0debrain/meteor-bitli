import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import NotFound from '../imports/ui/notFound';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="*" component={NotFound} />
	</Router>
);

Meteor.startup(() => {
	render(routes, document.querySelector('.root'));
});
