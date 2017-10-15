import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';
import App from './components/App';
import NotFound from '../imports/ui/notFound';
import Login from '../imports/ui/login';
import Signup from '../imports/ui/signup';
import Link from '../imports/ui/link';

const unauthenticatedPages = ['/login', '/signup'];
const authenticatedPages = ['/link'];

const onEnterPublicPage = () => {
	if (Meteor.userId()) {
		browserHistory.replace('/link');
	}
};

const onEnterPrivatePage = () => {
	if (!Meteor.userId()) {
		browserHistory.replace('/');
	}
};

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="/login" component={Login} onEnter={onEnterPublicPage} />
		<Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
		<Route path="/link" component={Link} onEnter={onEnterPrivatePage} />
		<Route path="*" component={NotFound} />
	</Router>
);

Tracker.autorun(() => {
	const isAuthenticated = !!Meteor.userId();
	const pathname = browserHistory.getCurrentLocation().pathname;
	const isUnauthenticatedPages = unauthenticatedPages.includes(pathname);
	const isAuthenticatedPages = authenticatedPages.includes(pathname);

	if (isUnauthenticatedPages && isAuthenticated) {
		browserHistory.push('/link');
	} else if (isAuthenticatedPages && !isAuthenticated) {
		browserHistory.push('/');
	}
});

Meteor.startup(() => {
	render(routes, document.querySelector('.root'));
});
