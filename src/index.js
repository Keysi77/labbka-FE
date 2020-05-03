import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
// import { hot } from 'react-hot-loader'

import App from './App'
import './grid.min.css'

// import "./i18n";

// FIXME: displayName of null
// const app = (
// 	<Provider store={store}>
// 		<PersistGate persistor={persistor}>
// 			<App />
// 		</PersistGate>
// 	</Provider>
// )

// hot(module)(ReactDOM.render(app, document.getElementById('root')))

ReactDOM.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
)
