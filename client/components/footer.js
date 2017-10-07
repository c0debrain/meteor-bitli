import React from 'react';
import '../../imports/styles/footer.css';

const Footer = () => {
	return (
		<div>
			<footer id="footer">
				<div className="container">
					<div className="text-center">
						<h2>Bitli</h2>
						<p>Developed using Meteor + React</p>
						<small>
							Developed by Aman Mittal. Code is available on&nbsp;
							<a href="https://github.com/amandeepmittal/meteor-bitli">
								Github
							</a>.
						</small>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
