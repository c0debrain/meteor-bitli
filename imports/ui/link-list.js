import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Links } from '../collections/links';

export default class LinksList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			links: []
		};
	}
	componentDidMount() {
		this.linksTracker = Tracker.autorun(() => {
			Meteor.subscribe('userlinks');
			const links = Links.find().fetch();
			this.setState({ links });
		});
	}

	componentWillUnmount() {
		this.linksTracker.stop();
	}

	renderLinksList() {
		return this.state.links.map(item => {
			return <p key={item._id}>{item.url}</p>;
		});
	}

	render() {
		return (
			<div>
				<p>Links List</p>
				<div>{this.renderLinksList()}</div>
			</div>
		);
	}
}
