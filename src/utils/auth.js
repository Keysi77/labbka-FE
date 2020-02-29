export const TOKEN_KEY = 'token'

/**
 * Removes saved token from localstorage
 */
export function clearAccessToken() {
	localStorage.removeItem(TOKEN_KEY)
}

/**
 * @return string token
 *
 * Returns access token saved into storage or null
 */
export function getAccessToken() {
	return localStorage.getItem(TOKEN_KEY)
}

/**
 * @param token
 *
 * Save user token into localstorage
 */
export function setAccessToken(token) {
	localStorage.setItem(TOKEN_KEY, token)
}
