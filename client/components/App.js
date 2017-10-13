import React from 'react';
import Header from './header';
import ShortLinksList from './shortlink-list';
import Footer from './footer';

const App = () => {
	return (
		<div className="App">
			<Header />
			<ShortLinksList />
			<Footer />
		</div>
	);
};

export default App;
