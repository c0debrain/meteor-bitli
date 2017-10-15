import React, { Component } from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends Component {
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

		if (password.length < 4) {
			return this.setState({
				error: 'Password must be more than 3 characters long.'
			});
		}

		Accounts.createUser({ email, password }, err => {
			if (err) {
				this.setState({ error: err.reason });
			} else {
				this.setState({ error: '' });
			}
		});

		// this.setState({ error: 'Incorrect Username or Password' });
	}

	render() {
		return (
			<div>
				<h1>Signup to a Create Short Link</h1>

				{this.state.error ? <p>{this.state.error}</p> : undefined}

				<form onSubmit={this.onSubmit.bind(this)} noValidate>
					<input type="email" name="email" ref="email" placeholder="Email" />
					<input
						type="password"
						name="password"
						ref="password"
						placeholder="Password"
					/>
					<button>Create Account</button>
				</form>

				<Link to="/login">Have an account?</Link>
			</div>
		);
	}
}
