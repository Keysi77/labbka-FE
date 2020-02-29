// Redux
import { combineReducers } from 'redux'
import storageLocal from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
// Reducers
import sheltersReducer from './shelters/shelters.reducer'
import animalsReducer from './animals/animals.reducer'
import usersReducer from './users/users.reducer'

const persistConfig = {
	key: 'root',
	storage: storageLocal,
	whitelist: [
		// vsetky reducere ktore chcem ulozit do localstorage
		// vacsinou tie ktore sa neukladaju do DB
		
		// 'nazovReduceruPreLocalStorage'
		usersReducer
	]
}

const rootReducer = combineReducers({
	shelters: sheltersReducer,
	animals: animalsReducer,
	users: usersReducer
})

export default persistReducer(persistConfig, rootReducer)
