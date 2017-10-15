import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

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

		new SimpleSchema({
			url: {
				type: String,
				regEx: SimpleSchema.RegEx.Url
			}
		}).validate({ url: url });

		Links.insert({ url, userId: this.userId });
	}
});
