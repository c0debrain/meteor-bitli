import React, { Component } from 'react';

class ShortLinkForm extends Component {
	render() {
		return (
			<form>
				<div className="row">
					<div className="input-group col-xs-6 col-xs-offset-4 col-md-4 col-md-offset-4">
						<input
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
