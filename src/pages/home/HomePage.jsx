import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'
import { fetchShelters } from '../../redux/shelters/shelters.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentShelters } from '../../redux/shelters/shelters.selectors'
// Utils
import { getAccessToken } from '../../utils/auth'
// Mapa
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
// Lodash
import { map, get, size } from 'lodash'
// Styles
import { SocialIcon } from 'react-social-icons'
import { locationIcon } from '../../utils/icons'

import './HomePage.sass'

const HomePage = (props) => {
	HomePage.propTypes = {
		shelters: PropTypes.arrayOf(PropTypes.object).isRequired,
		fetchShelters: PropTypes.func
	}

	const { fetchShelters, shelters } = props
	const history = useHistory()
	const token = getAccessToken()

	const [ selectedShelter, setSelectedShelter ] = useState(null)
	const [ viewPort, setViewPort ] = useState({
		// Banska Bystrica -> stred Slovensko
		latitude: 48.736279,
		longitude: 19.146191,
		zoom: 6.7,
		width: '100%',
		height: '500px'
	})
	// TODO: fetchnut statistiky endpoint ked Palo spravi
	useEffect(() => {
		const listener = (e) => {
			if (e.key === 'Escape') {
				setSelectedShelter(null)
			}
		}
		window.addEventListener('keydown', listener)
		fetchShelters()
		// cleanup - UNMOUNT
		return () => {
			window.removeEventListener('keydown', listener)
		}
	}, [fetchShelters])

	if (!token) {
		history.push('/prihlasenie')
	}

	const socialIconStyles = { height: 40, width: 40 }

	return (
		<div className="home-wrapper" style={{ borderRadius: '22px' }}>
			<h1 className="registered-shelters">
				Registrovane utulky: <span>{size(shelters)}</span>
			</h1>
			<ReactMapGL
				style={{ borderRadius: '25px ' }}
				mapboxApiAccessToken="pk.eyJ1Ijoia2V5c2k3NyIsImEiOiJjazdtenF3cWwwOHF0M21ubjZncWw3M2U4In0.tIxoS5G3YmQXmitpQQawOw"
				// FIXME: nefunguje z enviroment variable
				// mapboxApiAccessToken={process.env.MAP_TOKEN}
				{...viewPort}
				// prepise zakladne lon a lat ked bude pouzivatel hybat mapou a zoomovat
				onViewportChange={(viewPort) => setViewPort(viewPort)}
				// styly pre mapu -> https://www.mapbox.com/gallery/
				mapStyle="mapbox://styles/keysi77/ck7n056760l671ipank5701u0"
			>
				{map(shelters, (shelter) => {
					const latitude = get(shelter, 'address.lat')
					const longitude = get(shelter, 'address.lon')
					return (
						<Marker key={shelter.id} latitude={latitude} longitude={longitude}>
							<button
								className="marker-button"
								onClick={(e) => {
									e.preventDefault()
									setSelectedShelter(shelter)
								}}
							>
								<img src="/labbka_icon_2.png" alt="labbka" width="42" height="42" />
							</button>
						</Marker>
					)
				})}
				{selectedShelter && (
					<Popup
						closeOnClick={false}
						className="popup"
						latitude={get(selectedShelter, 'address.lat')}
						longitude={get(selectedShelter, 'address.lon')}
						onClose={() => setSelectedShelter(null)}
					>
						<div className="popup-wrapper">
							<h2 className="title">{selectedShelter.name}</h2>
							<div className="shelter-cover">
								<div className="location-icon">
									<img src={locationIcon} alt="location icon" width="16" height="16" />
									<span>{selectedShelter.address.city}</span>
								</div>
								<img className="shelter-cover-image" src={selectedShelter.cover} alt="shelter cover" />
							</div>
							<p className="address">{selectedShelter.address.address}</p>
							<div className="social">
								<SocialIcon
									target="_blank"
									style={socialIconStyles}
									fgColor="#fff"
									url={selectedShelter.social.facebook}
									network="facebook"
								/>
								<SocialIcon
									fgColor="#fff"
									target="_blank"
									style={socialIconStyles}
									url={selectedShelter.social.instagram}
									network="instagram"
								/>
								<SocialIcon
									fgColor="#fff"
									target="_blank"
									style={socialIconStyles}
									url={selectedShelter.social.instagram}
									network="twitter"
								/>
								<SocialIcon
									fgColor="#fff"
									target="_blank"
									style={socialIconStyles}
									url={selectedShelter.social.instagram}
									network="youtube"
								/>
							</div>
							{/* TODO: Dorobit detail utulku */}
							<div className="card-button">
								<Link to={'/detail-utulku/'}>
									<button>Viac Informacii</button>
								</Link>
							</div>
						</div>
					</Popup>
				)}
			</ReactMapGL>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	fetchShelters: () => dispatch(fetchShelters())
})

const mapStateToProps = createStructuredSelector({
	shelters: selectCurrentShelters
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
