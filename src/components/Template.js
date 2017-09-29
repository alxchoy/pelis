import React from 'react';
import Header from './shared/header/Header.js';

class Template extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				{this.props.children}
			</div>
		)
	}
}

export default Template;