import React from 'react';

import MasVotados from './mas-votados/MasVotados.js';
import MenosVotados from './menos-votados/MenosVotados.js';
import Library from './library/Library.js';

import config from '../firebase.config.js';
import * as firebase from 'firebase';

firebase.initializeApp(config);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			catalog: []
		}
		this.listData = [];
		this.handleListData = this.handleListData.bind(this);
	}

	componentDidMount() {
		const dataRef = firebase.database().ref('movies/');
		dataRef.on('value', (snapshot) => {
			this.setState({catalog: snapshot.val()})
		});
	}

	handleListData() {
		switch (this.props.orderBy) {
			case "likes":
				this.listData = <MasVotados list={this.state.catalog} />
				break;

			case "dislikes":
				this.listData = <MenosVotados list={this.state.catalog} />
				break;

			default:
				this.listData = <Library list={this.state.catalog} showSearch={true}/>
		}
	}

	render() {
		this.handleListData();
		return (
			<div>
				{this.listData}
			</div>
		)
	}
}

export default App;