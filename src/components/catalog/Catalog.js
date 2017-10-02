import React from 'react';

import Card from '../card/Card.js';
import './catalog.css';

class Catalog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			catalog: [],
			value: ''
		}
    this.findFilter = true;
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let value = event.target.value;
		let filterArray = []; 
		this.props.list.map((item) => {
			if (item.title.toLowerCase().indexOf(value) !== -1) {
		    filterArray.push(item);
			}
		});
		this.setState({
			catalog: filterArray,
			value: value
		});
    this.findFilter = filterArray.length ? true : false;
	}

  render() {
  	const arrayMovies = this.state.catalog.length ? this.state.catalog : this.props.list;
  	const moviesList = this.findFilter ? arrayMovies.map((item) => 

  		<Card key={item.id} id={item.id} image={item.img} title={item.title} description={item.description} likes={item.like} dislikes={item.dislike} /> ) :

      <div className="find-null">
        <i className="fa fa-eye-slash" aria-hidden="true"></i>
        <p>No se encontraron películas disponibles</p>
      </div>

    const showSearch = this.props.showSearch ? 
      <div className="catalog-search">
        <div className="catalog-search__wrapper">
          <input type="text" placeholder="Busca una película..." value={this.state.value} onChange={this.handleChange}/>
          <div className="border-focus"></div>
        </div>
      </div> : null;

  	return (
  		<div className="catalog">
  			{showSearch}
  			<div className="catalog-list">
  				{moviesList}
  			</div>
  		</div>
  	)
  }
}

export default Catalog;
