import { SHELTERS_ACTION_TYPES } from './shelters.types';
import { getReq } from '../../utils/request';
import { API_PATHS } from '../../enums/apiPaths';

export const fetchSheltersStart = () => ({
	type: SHELTERS_ACTION_TYPES.FETCH_SHELTERS_START
});

export const fetchSheltersSuccess = (data) => ({
	type: SHELTERS_ACTION_TYPES.FETCH_SHELTERS_SUCCESS,
	payload: data
});

export const fetchSheltersFailure = (errorMessage) => ({
	type: SHELTERS_ACTION_TYPES.FETCH_SHELTERS_FAILURE,
	payload: errorMessage
});

export const fetchShelters = () => {
	return async (dispatch) => {
		try {
			dispatch(fetchSheltersStart());

			const { data } = await getReq(API_PATHS.GET_SHELTERS);
			dispatch(fetchSheltersSuccess(data));

			return data;
		} catch (error) {
			dispatch(fetchSheltersFailure(error));
		}
	};
};
