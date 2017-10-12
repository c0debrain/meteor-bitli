import React from 'react';
import '../../imports/styles/header.css';
import ShortLinkForm from './shortlink-form';

const Header = () => {
	return (
		<div>
			<header className="header">
				<div
					role="navigation"
					className="navbar navbar-default navbar-fixed-top"
				>
					<div className="container">
						<div className="navbar-header">
							<a href="#all" className="navbar-brand scroll-to">
								<i className="glyphicon glyphicon-link" />Bitli
							</a>
							<div className="navbar-buttons">
								<button
									type="button"
									data-toggle="collapse"
									data-target=".navbar-collapse"
									className="navbar-toggle navbar-btn"
								>
									<i className="glyphicon glyphicon-menu-hamburger" />
								</button>
							</div>
						</div>
						<div
							id="navigation"
							className="collapse navbar-collapse navbar-right"
						>
							<ul className="nav navbar-nav">
								<li>
									<a href="">a URL Shortener Service</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
			<div id="intro">
				<div className="jumbotron">
					<div className="row">
						<div className="col-md-12" className="text-center">
							<h1>Minify your links with Bitli</h1>
							<h3>A Bitly Clone built with Meteor and React.</h3>
							<div className="container">
								<ShortLinkForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
