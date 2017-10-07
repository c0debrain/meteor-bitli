import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

const App = () => {
	return (
		<div className="App">
			<Header />
		</div>
	);
};

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.root'));
});
