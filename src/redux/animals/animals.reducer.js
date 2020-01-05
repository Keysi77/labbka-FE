import { ANIMALS_ACTION_TYPES } from './animals.types';

const INIT_STATE = {
	animals: [],
	isFetching: false,
	errorMessage: undefined
};

const animalsReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ANIMALS_ACTION_TYPES.FETCH_ANIMALS_START:
			return {
				...state,
				isFetching: true
			};
		case ANIMALS_ACTION_TYPES.FETCH_ANIMALS_SUCCESS:
			return {
				...state,
				isFetching: false,
				animals: action.payload
			};
		case ANIMALS_ACTION_TYPES.FETCH_ANIMALS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			};
		default:
			return state;
	}
};

export default animalsReducer;
