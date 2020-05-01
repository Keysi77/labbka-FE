import React from 'react'
import { useHistory } from 'react-router-dom'
// Ant
import { Tooltip } from 'antd'
// Logos
import googlePlayLogo from '../../assets/logos/google_play.png'
import appleStoreLogo from '../../assets/logos/apple_store.svg'
import dog from '../../assets/images/dog.png'
import cat from '../../assets/images/cat.png'
// Komponenty
import Facebook from './components/Facebook'
import Google from './components/Google'
// utils
import { getAccessToken } from '../../utils/auth'
// css
import './SignInPage.sass'

export default function SignInPage() {
	const history = useHistory()
	const token = getAccessToken()

	if (token) {
		history.push('/zvieratka-na-adopciu')
	}

	return (
		<div className={'sign-page-wraper'}>
			<div className="row">
				<div className="col-md-6">
					<div className="title">Nejaky Nadpis</div>
					<div className="subtitle">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur unde hic eos modi veniam?
						Repellendus dolor delectus animi, magni corrupti consequuntur temporibus iste eaque hic, natus
						vero ea culpa. Alias.
					</div>
					<div className="animal-images">
						<div className="dog">
							<img src={dog} width="380" alt="dog" />
						</div>
						<div className="cat">
							<img src={cat} width="260" alt="cat" />
						</div>
					</div>
				</div>

				<div className="col-md-6">
					<div className="form-wrapper">
						<div className="overlay">
							<div className="social-networks">
								<div className="col-md-11">
									<Facebook />
									<Google />
									<button
										className="login-button custom-login"
										onClick={() => history.push('/zvieratka-na-adopciu')}
									>
										<span>Pokračovať bez prihlásenia</span>
									</button>
								</div>
							</div>
							<div className="app-logos">
								<div className="col-md-11">
									<div className="row">
										<div className="col-md-6">
											<div
												onClick={() =>
													window.open(
														'https://play.google.com/store/apps/details?id=sk.franek.labbka',
														'_blank'
													)}
												style={{ cursor: 'pointer' }}
												className="google-play-logo"
											>
												<img src={googlePlayLogo} width="200" alt="google play" />
											</div>
										</div>
										<div className="col-md-6">
											<Tooltip title="Aplikaciu pre iOS system pripravujeme">
												<div style={{ cursor: 'not-allowed' }} className="apple-store-logo">
													<img src={appleStoreLogo} width="200" alt="apple store" />
												</div>
											</Tooltip>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
