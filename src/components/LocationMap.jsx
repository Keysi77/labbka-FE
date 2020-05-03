import React, { useState } from 'react'
import PropTypes from 'prop-types'
// Mapa
import ReactMapGL, { Marker } from 'react-map-gl'

import './components.sass'

const LocationMap = (props) => {
	const { long, lat } = props

	const [ viewPort, setViewPort ] = useState({
		// Banska Bystrica -> stred Slovensko
		latitude: 48.736279,
		longitude: 19.146191,
		zoom: 5,
		width: '100%',
		height: '100%'
	})

	return (
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
			{lat &&
			long && (
				<Marker latitude={lat} longitude={long}>
					<img src="/labbka_icon_2.png" alt="labbka" width="42" height="42" />
				</Marker>
			)}
		</ReactMapGL>
	)
}

LocationMap.propTypes = {
	long: PropTypes.number,
	lat: PropTypes.number
}

export default LocationMap
