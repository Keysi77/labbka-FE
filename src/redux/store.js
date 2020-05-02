import { createStore, applyMiddleware, compose } from 'redux'
// logger pre debugovanie middlewaru
import logger from 'redux-logger'
// redux-thunk = spusta funkcie v akciach
import thunk from 'redux-thunk'
// zlucuje vsetky reducere do jedneho
import rootReducer from './root-reducer'
// bude cachovat store do localstorage
import { persistStore } from 'redux-persist'

const middlewares = [ logger, thunk ]

// Support pre store v DEV Toole v REDUXE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))
export const persistor = persistStore(store)

export default { store, persistor }
