import { ANIMALS_ACTION_TYPES } from './animals.types'

const INIT_STATE = {
	animals: [],
	animal: [],
	isFetching: false,
	errorMessage: undefined
}

const animalsReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		// GET all animals
		case ANIMALS_ACTION_TYPES.FETCH_ANIMALS_START:
			return {
				...state,
				isFetching: true
			}
		case ANIMALS_ACTION_TYPES.FETCH_ANIMALS_SUCCESS:
			return {
				...state,
				isFetching: false,
				animals: action.payload
			}
		case ANIMALS_ACTION_TYPES.FETCH_ANIMALS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			}
		// GET One animal
		case ANIMALS_ACTION_TYPES.FETCH_ONE_ANIMAL_START:
			return {
				...state,
				isFetching: true
			}
		case ANIMALS_ACTION_TYPES.FETCH_ONE_ANIMAL_SUCCESS:
			return {
				...state,
				isFetching: false,
				animal: action.payload
			}
		case ANIMALS_ACTION_TYPES.FETCH_ONE_ANIMAL_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload
			}
		default:
			return state
	}
}

export default animalsReducer
