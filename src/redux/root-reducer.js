// Redux
import { combineReducers } from "redux";
// import storageLocal from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/es/storage/session";
// Reducers
import sheltersReducer from "./shelters/shelters.reducer";
import animalsReducer from "./animals/animals.reducer";
import usersReducer from "./users/users.reducer";

export const REDUCER_KEYS = {
	USERS: "users",
	ANIMALS: "animals",
	SHELTERS: "shelters"
};

const rootReducer = combineReducers({
	shelters: sheltersReducer,
	animals: animalsReducer,
	users: persistReducer(
		{
			key: REDUCER_KEYS.USERS,
			storage: storageSession
		},
		usersReducer
	)
});

export default rootReducer;
