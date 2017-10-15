import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { routes, onAuthChange } from '../imports/routes/routes';

Tracker.autorun(() => {
	const isAuthenticated = !!Meteor.userId();
	onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
	render(routes, document.querySelector('.root'));
});
