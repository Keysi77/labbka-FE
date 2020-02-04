import React from 'react'
// Router
import { BrowserRouter } from 'react-router-dom'
import { Router } from 'react-router'
import Routes from './routes/Routes'
import { history } from './utils/history'
// Material Provider
import { MuiThemeProvider } from 'material-ui/styles'
// Styly
import './App.sass'
// Komponenty
// import LandingPage from './pages/landing-page/landing-page.component'

function App() {
	return (
    <MuiThemeProvider>
      <BrowserRouter>
        <div className="wrapper">
          {/* <LandingPage /> */}
          <Router history={history}>
						<Routes/>
					</Router>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
	)
}
export default App     
