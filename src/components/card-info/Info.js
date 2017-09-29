import React from 'react';
import config from '../../firebase.config.js';
import * as firebase from 'firebase';
import './info.css';

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			like: 0,
			dislike: 0
		}
		this.itemId = this.props.id;
		this.handleVoteLike = this.handleVoteLike.bind(this);
		this.handleVoteDislike = this.handleVoteDislike.bind(this);
	}

	componentDidMount() {
		const dataRef = firebase.database().ref('movies/' + this.itemId);
		dataRef.on('value', snapshot => {
			this.setState({
				like: snapshot.val().like,
				dislike: snapshot.val().dislike
			})
		})
	}

	handleVoteLike() {
		let countLike = this.state.like;
		let updates = {};
		updates['movies/' + this.itemId + '/like'] = countLike += 1;
		firebase.database().ref().update(updates);
	}

	handleVoteDislike() {
		let countDislike = this.state.dislike;
		let updates = {};
		updates['movies/' + this.itemId + '/dislike'] = countDislike += 1;
		firebase.database().ref().update(updates);
	}

	render() {
		return (
			<div className="card-info">
				<div className="card-info__data">
					<h3>{this.props.title}</h3>
					<p>{this.props.description}</p>
				</div>
				<div className="card-info__vote">
					<div className="card-info__vote--like">
						<button onClick={this.handleVoteLike}>
							<i className="fa fa-thumbs-up" aria-hidden="true"></i>
						</button>
						<span>{this.state.like}</span>
					</div>
					<div className="card-info__vote--dislike">
						<button onClick={this.handleVoteDislike}>
							<i className="fa fa-thumbs-down" aria-hidden="true"></i>
						</button>
						<span>{this.state.dislike}</span>
					</div>
				</div>
				<div className="card-info__detail">
					Ver más
				</div>
			</div>
		)
	}
}

export default Info;