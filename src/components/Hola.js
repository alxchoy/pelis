import React from 'react';
import Header from './shared/header/Header.js';

const Hola = ({match}) => {
	return (
		<div>
			<h1>Hola</h1>
			<h3>{match.params.id}</h3>
		</div>
	)
}

export default Hola;