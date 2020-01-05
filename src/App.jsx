import React from 'react';
// KOMPONENTY
import Navbar from './components/Navigation/Navbar';
//
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/home/home.component';
import AnimalsPage from './pages/animals/animals.component';

function App() {
	return (
		<div>
			<MuiThemeProvider>
				<BrowserRouter>
					<div className="App">
            <Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/animals" component={AnimalsPage} />
						</Switch>
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		</div>
	);
}

export default App;
