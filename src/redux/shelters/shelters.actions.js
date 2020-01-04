import { SHELTERS_ACTION_TYPES } from './shelters.types'
import { getReq } from '../../utils/request'

export const fetchSheltersStart = () => ({

	type: SHELTERS_ACTION_TYPES.FETCH_SHELTERS_START
});

export const fetchSheltersSuccess = data => ({
	type: SHELTERS_ACTION_TYPES.FETCH_SHELTERS_SUCCESS,
	payload: data
})

export const fetchSheltersFailure = errorMessage => ({
	type: SHELTERS_ACTION_TYPES.FETCH_SHELTERS_FAILURE,
	payload: errorMessage
})

// export const loadSessionSeats = () => {
// 	return async (dispatch) => {
// 		try {
// 			dispatch({ type: PROGRAM_ACTIONS.SESSION_SEATS_LOAD_START })

// 			const { data } = await getReq(API_PATHS.SESSION_SEATS, undefined, undefined, NOTIFICATION_TYPE.NOTIFICATION)

// 			dispatch({ type: PROGRAM_ACTIONS.SESSION_SEATS_LOAD_DONE, payload: data })

// 			return data
// 		} catch (error) {
// 			dispatch({ type: PROGRAM_ACTIONS.SESSION_SEATS_LOAD_FAIL, payload: error })
// 		}
// 	}
// }

export const fetchShelters = () => {
	return async (dispatch) => {
		try {
			dispatch(fetchSheltersStart())

			const { data } = await getReq('/api/v0/shelters')
            console.log('DATA', data)
            dispatch(fetchSheltersSuccess(data))

			return data
		} catch (error) {
			dispatch(fetchSheltersFailure(error))
		}
	}
}
