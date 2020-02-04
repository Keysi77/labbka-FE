import { createStore, applyMiddleware } from 'redux'
// logger pre debugovanie middlewaru
import logger from 'redux-logger'
// redux-thunk = spusta funkcie v akciach
import thunk from 'redux-thunk'
// zlucuje vsetky reducere do jedneho
import rootReducer from './root-reducer'
// bude cachovat store do localstorage
import { persistStore } from 'redux-persist'

const middlewares = [ logger, thunk ]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)

export default { store, persistor }
