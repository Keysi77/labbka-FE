// Redux
import { combineReducers } from "redux";
// import storageLocal from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/es/storage/session";
// Reducers
import sheltersReducer from "./shelters/shelters.reducer";
import animalsReducer from "./animals/animals.reducer";
import usersReducer from "./users/users.reducer";

// const persistConfig = {
// 	key: 'root',
// 	storage: storageLocal,
// 	whitelist: [
// 		// vsetky reducere ktore chcem ulozit do localstorage
// 		// vacsinou tie ktore sa neukladaju do DB

// 		// 'nazovReduceruPreLocalStorage'
// 		usersReducer
// 	]
// }

export const REDUCER_KEYS = {
	USERS: "users",
	ANIMALS: "animals",
	SHELTERS: "shelters"
};

const rootReducer = combineReducers({
	shelters: sheltersReducer,
	animals: animalsReducer,
	// users: usersReducer
	users: persistReducer(
		{
			key: REDUCER_KEYS.USERS,
			storage: storageSession
		},
		usersReducer
	)
});

export default rootReducer;

// export default persistReducer(persistConfig, rootReducer)
