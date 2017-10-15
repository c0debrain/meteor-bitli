import { Meteor } from 'meteor/meteor';
import { ShortLinks } from '../imports/collections/shortlinks';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
	Meteor.publish('shortlinks', function(per_page) {
		return ShortLinks.find({}, { limit: per_page });
	});

	Accounts.validateNewUser(user => {
		const email = user.emails[0].address;
		try {
			new SimpleSchema({
				email: {
					type: String,
					regEx: SimpleSchema.RegEx.Email
				}
			}).validate({ email: email });
		} catch (e) {
			throw new Meteor.Error(400, e.message);
		}

		return true;
	});
});

const middleware = ConnectRoute(function(router) {
	router.get('/:token', function(req, res, next) {
		const shortLink = ShortLinks.findOne({ token: req.params.token });
		if (shortLink) {
			ShortLinks.update(shortLink, { $inc: { clicks: 1 } });
			res.writeHead(307, { Location: shortLink.url });
			res.end();
		} else {
			next();
		}
	});
});

WebApp.connectHandlers.use(middleware);
