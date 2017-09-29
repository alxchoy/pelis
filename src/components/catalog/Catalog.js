import React from 'react';
import Card from '../card/Card.js';
import config from '../../firebase.config.js';
import * as firebase from 'firebase';
import './catalog.css';

class Catalog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			catalog: [],
			value: ''
		}
		this.catalogInit = [];
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let value = event.target.value;
		let filterArray = []; 
		this.catalogInit.map((item) => {
			if (item.title.toLowerCase().indexOf(value) !== -1) {
				filterArray.push(item);
			}
		});
		this.setState({
			catalog: filterArray,
			value: value
		})
	}

  render() {
  	this.catalogInit = this.props.items;
  	const arrayMovies = this.state.catalog.length ? this.state.catalog : this.props.items;
  	const moviesList = arrayMovies.map((item) => 
  		<Card
  			key={item.id} 
  			id={item.id} 
  			image={item.img} 
  			title={item.title} 
  			description={item.description} />
  	);
    
  	return (
  		<div className="catalog">
  			<div className="catalog-search">
  				<div className="catalog-search__wrapper">
  					<input type="text" placeholder="Busca una película..." value={this.state.value} onChange={this.handleChange}/>
  					<div className="border-focus"></div>
  				</div>
  			</div>
  			<div className="catalog-list">
  				{moviesList}
  			</div>
  		</div>
  	)
  }
}

export default Catalog;
