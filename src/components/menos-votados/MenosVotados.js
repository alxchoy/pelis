import React from 'react';

import Catalog from '../catalog/Catalog.js';

class MenosVotados extends React.Component {
	render() {
		const orderByDislikes = this.props.list.sort( (a, b) => b.dislike - a.dislike );
		const topDislikes = orderByDislikes.slice(0, 5);

		return (
			<div>
				<div className="header-top">
					<h1>Top 5 con más dislikes</h1>
				</div>
				<Catalog list={topDislikes} />
			</div>
		)
	}
}

export default MenosVotados;