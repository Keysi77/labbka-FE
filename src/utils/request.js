import axios from 'axios'

export const getReq = async(url, params, customConfig = {} ) => {
	const config = {
		...customConfig,
	}

	if (params) {
		config.params = params
	}

	try {
		const res = await axios.get(url, config)
		return res
	} catch (e) {
		console.log(e)
	}
}

// TODO: ostatne na POST, DELETE a UPDATE