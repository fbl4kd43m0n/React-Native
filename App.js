import React from 'react';

import Post from './Post';

export default class App extends React.Component {
	
	render() {
		
		return (

			<div>

				<h1>Hello Motherfucker</h1>
				
				<Post title="Aprendendo ReactJS com a RocketSeat" />
				
				<Post title="ReactJS é demais!" />
				
				<Post title="Comer churrasco é muito bom"/>

			</div>
		);
	}
	
}

	