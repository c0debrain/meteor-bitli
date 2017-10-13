import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import NotFound from '../imports/ui/notFound';
import Login from '../imports/ui/login';
import Signup from '../imports/ui/signup';
import Link from '../imports/ui/link';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="/login" component={Login} />
		<Route path="/signup" component={Signup} />
		<Route path="/link" component={Link} />
		<Route path="*" component={NotFound} />
	</Router>
);

Meteor.startup(() => {
	render(routes, document.querySelector('.root'));
});
