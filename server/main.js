import { Meteor } from 'meteor/meteor';
import { ShortLinks } from '../imports/collections/shortlinks';

Meteor.startup(() => {
	Meteor.publish('shortlinks', function() {
		return ShortLinks.find({});
	});
});
