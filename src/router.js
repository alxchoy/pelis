import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './components/App.js';
import Template from './components/shared/Template.js';

const AppRoutes = () => (
	<Router>
		<Template>
			<Switch>
				<Route exact path='/pelis/' render={ (props) => ( <App {...props} orderBy="default"/> ) } />
				<Route exact path="/pelis/mas-votados" render={ (props) => ( <App {...props} orderBy="likes"/> ) } />
				<Route exact path="/pelis/menos-votados" render={ (props) => ( <App {...props} orderBy="dislikes"/> ) } />
			</Switch>
		</Template>
	</Router>
)

export default AppRoutes;