import { USER_ACTIONS } from '../users/users.types'
import { history } from '../../utils/history'
import { setAccessToken, clearAccessToken } from '../../utils/auth'
import { postReq } from '../../utils/request'
import { API_PATHS } from '../../enums/apiPaths'
import { LOGIN_TYPE } from '../../enums/general'

export const loginUser = (loginData) => {
	return async (dispatch) => {
		try {
			const { data } = await postReq(
				loginData.loginType === LOGIN_TYPE.FACEBOOK
					? API_PATHS.LOGIN_USER_FACEBOOK
					: API_PATHS.LOGIN_USER_GOOGLE,
				undefined,
				loginData
			)
			dispatch({
				type: USER_ACTIONS.USER_LOGIN,
				payload: data
			})
			setAccessToken(data.bearer)
			history.push('/zvieratka-na-adopciu')
		} catch (error) {
			return error
		}
	}
}

export const logoutUser = () => {
	return (dispatch) => {
		clearAccessToken()
		dispatch({
			type: USER_ACTIONS.USER_LOGOUT
		})
		history.push('/prihlasenie')
	}
}
