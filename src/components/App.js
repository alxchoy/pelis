import React from 'react';
import Catalog from './catalog/Catalog.js';

import config from '../firebase.config.js';
import * as firebase from 'firebase';

firebase.initializeApp(config);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			catalog: []
		}
	}

	componentDidMount() {
		const dataRef = firebase.database().ref('movies/');
		let list = [];
		
		switch (this.props.orderBy) {
			case 'likes':
				dataRef.on('value', (snapshot) => {
					list = snapshot.val().sort( (a, b) => b.like - a.like);
					console.log(list);
					this.setState({catalog: list});
				});
				break;

			case 'dislikes':
				dataRef.on('value', (snapshot) => {
					list = snapshot.val().sort( (a, b) => b.dislike - a.dislike);
					this.setState({catalog: list});
				});
				break;

			default:
				dataRef.on('value', (snapshot) => {
					this.setState({catalog: snapshot.val()});
				});
		}
	}

	render() {
		return (
			<Catalog items={this.state.catalog} />
		)
	}
}

export default App;