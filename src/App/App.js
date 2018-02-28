import React from 'react';
import Routes from './Routes';
import TopNav from './TopNav';

export default function App() {
	return (
		<div>
			<TopNav />
				<main className="container">
				 	<Routes />
				</main>
		</div>
	);
}
