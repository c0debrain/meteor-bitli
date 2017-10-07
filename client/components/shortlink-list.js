import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { ShortLinks } from '../../imports/collections/shortlinks';

const PER_PAGE = 1;

class ShortLinksList extends Component {
	componentWillMount() {
		this.page = 1;
	}

	handleButtonClick() {
		Meteor.subscribe('shortlinks', PER_PAGE * this.page + 1);
		this.page += 1;
	}

	renderRows() {
		return this.props.shortlinks.map(shortlink => {
			const { url, token, clicks } = shortlink;
			const link = `http://localhost:3000/${token}`;

			return (
				<tr key={token}>
					<td>{url}</td>
					<td>
						<a href={link} target="_blank">
							{link}
						</a>
					</td>
					<td>{clicks}</td>
				</tr>
			);
		});
	}

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
								<th className="col-xs-6 col-md-6">Url</th>
								<th className="col-xs-4 col-md-4">Short Link</th>
								<th className="col-xs-2 col-md-2">Clicks</th>
							</tr>
						</thead>
						<tbody>{this.renderRows()}</tbody>
					</table>
					<br />
					<div className="text-center">
						<button
							className="btn btn-primary"
							onClick={this.handleButtonClick.bind(this)}
						>
							Load More
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default createContainer(() => {
	Meteor.subscribe('shortlinks', PER_PAGE);
	return { shortlinks: ShortLinks.find().fetch() };
}, ShortLinksList);
