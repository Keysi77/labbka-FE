import { createStore, applyMiddleware } from 'redux';
// logger pre debugovanie middlewaru
import logger from 'redux-logger';
// redux-thunk = odpaluje funkcie v akciach
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';
// bude cachovat store
// import { persistStore } from 'redux-persist';

const middlewares = [ logger, thunk ];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// export const persistor = persistStore(store);

export default store;
