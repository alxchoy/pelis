import React from 'react';

import Catalog from '../catalog/Catalog.js';

class Library extends React.Component {
	render() {
		const listOrder = this.props.list.sort( (a, b) => {
			if ( a.title > b.title ) {
				return 1;
			} else if ( a.title < b.title ) {
				return -1;
			} else {
				return 0;	
			}
		});
		
		return (
			<Catalog list={listOrder} showSearch={this.props.showSearch}/>
		)
	}
}

export default Library;