import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Routes

// Layout

// Pages
import Home from './pages/home/home.component';
import Animals from './pages/animals/animals.component';

class Routes extends Component {

	render() {
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/animals' component={Animals} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}
export default Routes
