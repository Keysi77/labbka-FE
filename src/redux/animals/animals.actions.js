import { ANIMALS_ACTION_TYPES } from './animals.types'
import { getReq } from '../../utils/request'
import { API_PATHS } from '../../enums/apiPaths'

export const fetchAnimals = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: ANIMALS_ACTION_TYPES.FETCH_ANIMALS_START })
			const { data } = await getReq(API_PATHS.GET_ANIMALS, { limit: 0 })
			dispatch({ type: ANIMALS_ACTION_TYPES.FETCH_ANIMALS_SUCCESS, payload: data })
			return data
		} catch (error) {
			dispatch({ type: ANIMALS_ACTION_TYPES.FETCH_ANIMALS_FAILURE, payload: error })
		}
	}
}

// ked bude mazanie/update a posielat sa ID

// const res = await deleteReq(API_PATHS.DELETE_DISCOUNT(showRemoveDiscountModal.id), undefined, undefined, NOTIFICATION_TYPE.NOTIFICATION)

