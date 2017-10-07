import React, { Component } from 'react';

class ShortLinksList extends Component {
	render() {
		return (
			<div className="container">
				<div className="text-center">
					<h1>
						<i className="glyphicon glyphicon-link" />
					</h1>
					<h2>Optimize your links by shortening them</h2>
					<h4>For various social media platforms and track individual link.</h4>
				</div>
				<div className="container">
					<table className="table table-stripped">
						<thead>
							<tr>
								<th>Url</th>
								<th>Short Link</th>
								<th>Clicks</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		);
	}
}

export default ShortLinksList;
