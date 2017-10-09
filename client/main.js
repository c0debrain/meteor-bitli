import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import ShortLinksList from './components/shortlink-list';
import Footer from './components/footer';

const App = () => {
	return (
		<div className="App">
			<Header />
			<ShortLinksList />
			<Footer />
		</div>
	);
};

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.root'));
});
