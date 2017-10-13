import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Signup extends Component {
	render() {
		return (
			<div>
				<h1>Signup to a Create Short Link</h1>
				<Link to="/login">Have an account?</Link>
			</div>
		);
	}
}
