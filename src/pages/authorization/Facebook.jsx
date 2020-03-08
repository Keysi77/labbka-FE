import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth/auth.actions";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import PropTypes from "prop-types";

import "./SignInPage.sass";

function Facebook({ loginUser }) {
	Facebook.propTypes = {
		loginUser: PropTypes.func
	};

	const responseFacebook = async response => {
		const loginData = {
			loginType: "FACEBOOK",
			token: response.accessToken,
			state: "SVK",
			language: "SK",
			platform: "WEB"
		};
		loginUser(loginData);
	};

	return (
		<FacebookLogin
			render={renderProps => (
				<button
					className="login-button facebook-login"
					onClick={renderProps.onClick}
				>
					<span>Prihlásiť pomocou účtu Facebook</span>
				</button>
			)}
			appId="505327960172396"
			autoLoad={false}
			fields="name,email,picture"
			callback={responseFacebook}
		/>
	);
}

const mapDispatchToProps = dispatch => ({
	loginUser: data => dispatch(loginUser(data))
});

export default connect(null, mapDispatchToProps)(Facebook);
