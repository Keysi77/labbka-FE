import { combineReducers } from 'redux'
import sheltersReducer from './shelters/shelters.reducer'
import storageLocal from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import animalsReducer from './animals/animals.reducer'

const persistConfig = {
	key: 'root',
	storage: storageLocal,
	whitelist: [
		// vsetky reducere ktore chcem ulozit do localstorage
		// vacsinou tie ktore sa neukladaju do DB
		'shelters'
	]
}

const rootReducer = combineReducers({
	shelters: sheltersReducer,
	animals: animalsReducer
})

export default persistReducer(persistConfig, rootReducer)
