import { Meteor } from 'meteor/meteor';
import { ShortLinks } from '../imports/collections/shortlinks';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
	Meteor.publish('shortlinks', function() {
		return ShortLinks.find({});
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
