import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
	Meteor.publish('userlinks', function() {
		return Links.find({ userId: this.userId });
	});
}

Meteor.methods({
	'userlinks.insert': function(url) {
		if (!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Links.insert({ url, userId: this.userId });
	}
});
