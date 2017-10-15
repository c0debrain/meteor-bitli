import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../../client/components/App';
import NotFound from '..//ui/notFound';
import Login from '../ui/login';
import Signup from '../ui/signup';
import Link from '../ui/link';

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

export const onAuthChange = isAuthenticated => {
	const pathname = browserHistory.getCurrentLocation().pathname;
	const isUnauthenticatedPages = unauthenticatedPages.includes(pathname);
	const isAuthenticatedPages = authenticatedPages.includes(pathname);

	if (isUnauthenticatedPages && isAuthenticated) {
		browserHistory.push('/link');
	} else if (isAuthenticatedPages && !isAuthenticated) {
		browserHistory.push('/');
	}
};

export const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
		<Route path="/login" component={Login} onEnter={onEnterPublicPage} />
		<Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
		<Route path="/link" component={Link} onEnter={onEnterPrivatePage} />
		<Route path="*" component={NotFound} />
	</Router>
);
