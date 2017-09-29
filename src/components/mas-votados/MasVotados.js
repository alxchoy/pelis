import React from 'react';
import App from '../App.js';

class MasVotados extends React.Component {
	render() {
		return (
			<App orderBy="likes" />
		)
	}
}

export default MasVotados;