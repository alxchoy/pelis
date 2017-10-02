import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="header-container">
					<div className="logo"><Link to="/">FullPelis</Link></div>
					<div className="filtro">
						<ul>
							<li><Link to="/mas-votados">Más votados</Link></li>
							<li><Link to="/menos-votados">Menos votado</Link></li>
						</ul>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;