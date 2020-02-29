// import { userLoadSuccess } from "./userActions"
import { USER_ACTIONS } from "../users/users.types";
import { history } from '../../utils/history'
import { setAccessToken, clearAccessToken } from "../../utils/auth";
import { postReq } from "../../utils/request";
import { API_PATHS } from "../../enums/apiPaths";

// TODO: History nefunguje
// import { createBrowserHistory } from 'history'
// const history = createBrowserHistory()

export const loginUser = (loginData) => {
    console.log('loginData', loginData)
	return async dispatch => {
        try {
            if (loginData.loginType === 'FACEBOOK') {
                const { data } = await postReq(API_PATHS.LOGIN_USER_FACEBOOK, undefined, loginData)
                console.log('response z facebook', data)
                setAccessToken(data.bearer)
            }
            if (loginData.loginType === 'GOOGLE') {
                const { data } = await postReq(API_PATHS.LOGIN_USER_GOOGLE, undefined, loginData)
                console.log('response z google', data)
                setAccessToken(data.bearer)
            }
            // Nacitanie profilu
            // dispatch(userLoadSuccess(profile))
            dispatch({
                type: USER_ACTIONS.USER_LOGIN
            });
            history.push("/zvieratka-na-adopciu");
            console.log('LOGED IN')
        } catch (error) {
            console.log('error', error)
        }
	}
}

export const logoutUser = () => {
	return dispatch => {
		clearAccessToken();
		dispatch({
			type: USER_ACTIONS.USER_LOGOUT
		});
        history.push("/prihlasenie");
	};
};
