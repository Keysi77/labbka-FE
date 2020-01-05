import { SHELTERS_ACTION_TYPES } from './shelters.types';

const INIT_STATE = {
	shelters: [],
	isFetching: false,
	errorMessage: undefined
};

const sheltersReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case SHELTERS_ACTION_TYPES.FETCH_SHELTERS_START:
			return {
				...state,
				isFetching: true
			};
		// ked sa data spravne FETCHnu
		case SHELTERS_ACTION_TYPES.FETCH_SHELTERS_SUCCESS:
			return {
				...state,
				isFetching: false,
				shelters: action.payload
			};
		case SHELTERS_ACTION_TYPES.FETCH_SHELTERS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		default:
			return state;
	}
};

export default sheltersReducer;