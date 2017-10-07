import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import ShortLinksList from './components/shortlink-list';

const App = () => {
	return (
		<div className="App">
			<Header />
			<ShortLinksList />
		</div>
	);
};

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.root'));
});
