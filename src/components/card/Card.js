import React from 'react';
import Info from '../card-info/Info.js';
import './card.css';

class Card extends React.Component {
	render() {
		return (
			<div className="card" onClick={this.props.onClick}>
				<div className="card-img">
					<img src={this.props.image}/>
				</div>
				<Info id={this.props.id} title={this.props.title} description={this.props.description} image={this.props.image} />
			</div>
		)
	}
}

export default Card;