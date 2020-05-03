import axios from 'axios'
/**
 * @param url url endpoint
 * @param params Object params object
 * @param data Object data object
 * @param customConfig overwrite defaultConfig with custom one
 * @param typeNotification Enum notification type
 * @param showLoading Boolean show loading
 * @return Promise response
 * Performs post request to url and returns callback with result
 */

export const getReq = async (url, params, customConfig = {}) => {
	const config = {
		...customConfig
	}

	if (params) {
		config.params = params
	}

	try {
		const res = await axios.get(url, config)
		return res
	} catch (e) {
		return e
	}
}

export const postReq = async (url, params, data = {}, customConfig = {}) => {
	const config = {
		...customConfig
	}

	if (params) {
		config.params = params
	}

	try {
		const res = await axios.post(url, data, config)
		return res
	} catch (e) {
		return Promise.reject(e)
	}
}
// TODO: ostatne na DELETE a UPDATE
