import React from 'react';
import App from '../App.js';

class MenosVotados extends React.Component {
	render() {
		return (
			<App orderBy="dislikes" />
		)
	}
}

export default MenosVotados;