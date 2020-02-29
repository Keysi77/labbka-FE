import { USER_ACTIONS } from './users.types'

const INIT_STATE = {
	users: [],
	isFetching: false,
	errorMessage: undefined
}

const usersReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		// case USERS_ACTION_TYPES.SET_TOKEN_LOCALSTORAGE:
		// 	return {
		// 		...state,
		// 		isFetching: true
        // 	}
        case USER_ACTIONS.USER_LOGIN:
        case USER_ACTIONS.USER_LOGOUT:
		default:
			return state
	}
}

export default usersReducer
