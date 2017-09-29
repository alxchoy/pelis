import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Catalog from './components/catalog/Catalog.js';
import App from './components/App.js';
import MasVotados from './components/mas-votados/MasVotados.js';
import MenosVotados from './components/menos-votados/MenosVotados.js';
import Template from './components/Template.js';

import Hola from './components/Hola.js';

const AppRoutes = () => (
	<Router>
		<Template>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path="/mas-votados" component={App} orderBy="likes" />
				<Route path="/menos-votados" component={App} orderBy="dislikes"/>
				<Route path="/hola" component={Hola} hola={"hola"}/>
			</Switch>
		</Template>
	</Router>
)

export default AppRoutes;