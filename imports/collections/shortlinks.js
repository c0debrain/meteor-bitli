// Main Short Link collection file.

import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';
import validUrl from 'valid-url';

Meteor.methods({
	'shortlinks.insert': function(url) {
		// check if url entered is valid or not
		check(url, Match.Where(url => validUrl.isUri(url)));
		// if check passes, generate a token
		const token = Math.random()
			.toString(36)
			.slice(-5);
		// then save url
		ShortLinks.insert({ url, token, clicks: 0 });
	}
});

export const ShortLinks = new Mongo.Collection('shortlinks');
