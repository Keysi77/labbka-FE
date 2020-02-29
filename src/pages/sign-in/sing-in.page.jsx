import React from "react";
import { useHistory } from "react-router-dom";
// Material
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// Logos
import googlePlayLogo from "../../assets/logos/google_play.png";
import appleStoreLogo from "../../assets/logos/apple_store.svg";
// Komponenty
import Facebook from "./Facebook";
import Google from "./Google";
// utils
import { getAccessToken } from "../../utils/auth";
// css
import "./sign-in.styles.sass";

const useStyles = makeStyles(theme => ({
	root: {
		height: "100vh"
	},
	image: {
		backgroundImage:
			"url(https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/326/326253/corgi-and-terrier-running.jpg?w=1155&h=1541)",
		backgroundRepeat: "no-repeat",
		backgroundColor: theme.palette.grey[900],
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "100vh"
	},
	paper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		height: "100%"
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	}
}));

export default function SignInSide() {
	const classes = useStyles();
	const history = useHistory();
	const token = getAccessToken();

	if (token) {
		history.push("/zvieratka-na-adopciu");
	}

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid
				className="wrapper-grid"
				item
				xs={12}
				sm={8}
				md={5}
				component={Paper}
				elevation={6}
				square
			>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Prihlasenie
					</Typography>
					<div className="social-networks">
						<Facebook />
						<Google />
						<button
							className="login-button custom-login"
							onClick={() => history.push("/zvieratka-na-adopciu")}
						>
							<span>Pokračovať bez prihlásenia</span>
						</button>
					</div>
					<div className="app-logos">
						<div
							onClick={() =>
								window.open(
									"https://play.google.com/store/apps/details?id=sk.franek.labbka",
									"_blank"
								)
							}
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
			</Grid>
		</Grid>
	);
}
