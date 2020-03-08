import React from "react";
import { useHistory } from "react-router-dom";
// Ant
import { Tooltip } from "antd";
// Logos
import googlePlayLogo from "../../assets/logos/google_play.png";
import appleStoreLogo from "../../assets/logos/apple_store.svg";
import dogs from "../../assets/images/dog.jpg";
// Komponenty
import Facebook from "./Facebook";
import Google from "./Google";
// utils
import { getAccessToken } from "../../utils/auth";
// css
import "./SignInPage.sass";
import { Animated } from "react-animated-css";

export default function SignInPage() {
	const history = useHistory();
	const token = getAccessToken();

	if (token) {
		history.push("/zvieratka-na-adopciu");
	}

	return (
		<div className="login-wrapper">
			<div className="image">
				<img src={dogs} alt="Cinque Terre" />
			</div>
			<div className="login">
				Prihlasenie
				<Animated animationOut="fadeInUp" isVisible={true}>
					<div className="social-networks">
						<Facebook className="flash" />
						<Google />

						<button
							className="login-button custom-login"
							onClick={() => history.push("/zvieratka-na-adopciu")}
						>
							<span>Pokračovať bez prihlásenia</span>
						</button>
					</div>
				</Animated>
				<div className="app-logos">
					<div
						onClick={() =>
							window.open(
								"https://play.google.com/store/apps/details?id=sk.franek.labbka",
								"_blank"
							)
						}
						style={{ cursor: "pointer" }}
						className="google-play-logo"
					>
						<img src={googlePlayLogo} width="150" alt="google play" />
					</div>
					<Tooltip title="Aplikaciu pre iOS system pripravujeme">
						<div className="apple-store-logo">
							<img src={appleStoreLogo} width="150" alt="apple store" />
						</div>
					</Tooltip>
				</div>
			</div>
		</div>
	);
}
