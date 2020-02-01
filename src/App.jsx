import React from 'react'
// KOMPONENTY
import Navbar from './components/Navigation/Navbar'
//
import { MuiThemeProvider } from 'material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { history } from './utils/history'

import './App.css'

import Home from './pages/home/home.component'
import AnimalsPage from './pages/animals/animals.component'
import SideMenu from './pages/menu/side-menu.component'
import OwnMenu from './pages/menu/own-menu.component'
import Routes from './routes/Routes'
import { Router } from 'react-router'
import Header from './pages/menu/header.component'

function App() {
	return (
    <MuiThemeProvider>
      <BrowserRouter>
        <div className="wrapper">
          {/* <Header /> */}
          {/* <Navbar /> */}
          <SideMenu className="side-bar-menu" />
          {/* <OwnMenu /> */}
          <Router history={history}>
						<Routes/>
					</Router>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
	)
}
export default App     
