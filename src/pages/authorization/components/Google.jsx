import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { loginUser } from '../../../redux/auth/auth.actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { LOGIN_TYPE } from '../../../enums/general'

import '../SignInPage.sass'

function Google({ loginUser }) {
	Google.propTypes = {
		loginUser: PropTypes.func
	}
	const responseGoogle = (response) => {
		const loginData = {
			loginType: LOGIN_TYPE.GOOGLE,
			token: response.accessToken,
			state: 'SVK',
			language: 'SK',
			platform: 'WEB'
		}
		loginUser(loginData)
	}

	return (
		<GoogleLogin
			// TODO: prerobit ID do enviroment variables
			clientId="1037878078382-7t0usi29muijo3jtfn1s4kgbc7ulpstl.apps.googleusercontent.com"
			render={(renderProps) => (
				<button
					className="login-button google-login"
					onClick={renderProps.onClick}
					disabled={renderProps.disabled}
				>
					<span>Prihlásiť pomocou účtu Google</span>
				</button>
			)}
			onSuccess={responseGoogle}
			onFailure={responseGoogle}
			cookiePolicy={'single_host_origin'}
		/>
	)
}

const mapDispatchToProps = (dispatch) => ({
	loginUser: (data) => dispatch(loginUser(data))
})

export default connect(null, mapDispatchToProps)(Google)
