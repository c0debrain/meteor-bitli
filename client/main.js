import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return <div className="App">works!</div>;
};

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.root'));
});
