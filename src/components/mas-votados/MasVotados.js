import React from 'react';

import Catalog from '../catalog/Catalog.js';

class MasVotados extends React.Component {
	render() {
		const orderByLikes = this.props.list.sort( (a, b) => b.like - a.like );
		const topLikes = orderByLikes.slice(0, 5);

		return (
			<div>
				<div className="header-top">
					<h1>Top 5 con más likes</h1>
				</div>
				<Catalog list={topLikes} />
			</div>
		)
	}
}

export default MasVotados;