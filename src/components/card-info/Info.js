import React from 'react';

import * as firebase from 'firebase';
import './info.css';

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.itemId = this.props.id;
		this.handleVoteLike = this.handleVoteLike.bind(this);
		this.handleVoteDislike = this.handleVoteDislike.bind(this);
	}

	handleVoteLike() {
		let countLike = this.props.likes;
		let updates = {};
		updates['movies/' + this.itemId + '/like'] = countLike += 1;
		firebase.database().ref().update(updates);
	}

	handleVoteDislike() {
		let countDislike = this.props.dislikes;
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
						<span>{this.props.likes}</span>
					</div>
					<div className="card-info__vote--dislike">
						<button onClick={this.handleVoteDislike}>
							<i className="fa fa-thumbs-down" aria-hidden="true"></i>
						</button>
						<span>{this.props.dislikes}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Info;