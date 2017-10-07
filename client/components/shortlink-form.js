import React, { Component } from 'react';

class ShortLinkForm extends Component {
	handleSubmit(event) {
		event.preventDefault();
		console.log(this.refs.link.value);
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
							<button className="btn btn-primary">Shorten</button>
						</span>
					</div>
				</div>
			</form>
		);
	}
}

export default ShortLinkForm;
