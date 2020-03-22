import { USER_ACTIONS } from "./users.types";

const INIT_STATE = {
	users: [],
	loggedUser: null,
	isFetching: false,
	errorMessage: undefined
};

const usersReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case USER_ACTIONS.USER_LOGIN:
			return {
				...state,
				isFetching: false,
				loggedUser: action.payload
			};
		case USER_ACTIONS.USER_LOGOUT:
			return INIT_STATE;
		default:
			return state;
	}
};

export default usersReducer;
