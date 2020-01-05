import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Routes

// Layout

// Pages
import Home from './pages/home/home.component';
import Animals from './pages/animals/animals.component';
import AnimalItem from './components/animal-item/animal-item.component';

class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/animals" component={AnimalItem} />
						<Route path="/test" component={Animals} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
export default Routes;
