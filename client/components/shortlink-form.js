import React, { Component } from 'react';

let btnPrimary = {
	color: '#ffffff',
	'border-color': '#ffffff',
	'background-color': '#00FBD3'
};

class ShortLinkForm extends Component {
	constructor(props) {
		super(props);
		this.state = { error: '' };
	}

	handleSubmit(event) {
		event.preventDefault();

		Meteor.call('shortlinks.insert', this.refs.link.value, error => {
			if (error) {
				this.setState({ error: 'Enter a valid Url!' });
			} else {
				this.setState({ error: '' });
				this.refs.link.value = '';
			}
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div className="row">
					<div className="input-group col-xs-6 col-xs-offset-4 col-md-4 col-md-offset-4">
						<input
							ref="link"
							className="form-control"
							placeholder="Enter a link to shorten"
						/>
						<span className="input-group-btn">
							<button className="btn" style={btnPrimary}>
								Shorten
							</button>
						</span>
					</div>
					<div className="text-danger">
						<h3>{this.state.error}</h3>
					</div>
				</div>
			</form>
		);
	}
}

export default ShortLinkForm;
