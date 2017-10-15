import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../collections/links';
import LinksList from './link-list';

export default class Link extends Component {
	onLogout() {
		Accounts.logout();
	}

	onSubmit(event) {
		const url = this.refs.url.value.trim();

		event.preventDefault();

		if (url) {
			Meteor.call('userlinks.insert', url);
			this.refs.url.value = '';
		}
	}

	render() {
		return (
			<div>
				<h1>You Links</h1>
				<button onClick={this.onLogout.bind(this)}>Logout</button>
				<h1>Shorten a link</h1>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" ref="url" placeholder="Enter a valid URL" />
					<button>Shorten</button>
				</form>
				<LinksList />
			</div>
		);
	}
}
