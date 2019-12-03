import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Routes

// Layout

// Pages
import AnimalsPage from './components/Animals/AnimalsPage'

class Routes extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path='/' component={AnimalsPage} />
						<Route path='/animals' component={AnimalsPage} />
					</Switch>
				</div>
			</BrowserRouter>
		)
	}
}
export default Routes
