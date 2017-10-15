import React, { Component } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: ''
		};
	}

	onSubmit(event) {
		event.preventDefault();
		let email = this.refs.email.value.trim();
		let password = this.refs.password.value.trim();

		Meteor.loginWithPassword({ email }, password, err => {
			if (err) {
				this.setState({ error: 'Invalid email or password.' });
			} else {
				this.setState({ error: '' });
			}
		});
	}

	render() {
		return (
			<div>
				<h1>Login to Create a Short Link</h1>
				{this.state.error ? <p>{this.state.error}</p> : undefined}

				<form onSubmit={this.onSubmit.bind(this)} noValidate>
					<input type="email" name="email" ref="email" placeholder="Email" />
					<input
						type="password"
						name="password"
						ref="password"
						placeholder="Password"
					/>
					<button>Log in</button>
				</form>

				<Link to="/signup">New user?</Link>
			</div>
		);
	}
}
