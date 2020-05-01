import React, { useEffect } from 'react'
import * as PropTypes from 'prop-types'
// import { useTranslation } from "react-i18next";
import { connect } from 'react-redux'

import { fetchShelters, fetchOneShelter } from '../../redux/shelters/shelters.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentShelters } from '../../redux/shelters/shelters.selectors'
import { map, get } from 'lodash'
import './SheltersPage.sass'
import locationIcon from '../../assets/icons/location_on.svg'
import { Link } from 'react-router-dom'

const SheltersPage = (props) => {
	SheltersPage.propTypes = {
		shelters: PropTypes.arrayOf(PropTypes.object).isRequired,
		fetchShelters: PropTypes.func,
		fetchOneShelter: PropTypes.func
		// t: PropTypes.func.isRequired
	}

	const { fetchShelters, shelters, fetchOneShelter } = props

	// const { t } = useTranslation();
	useEffect(() => {
		fetchShelters()
	}, [])

	console.log('shelters', shelters)

	const handleShelterDetail = (id) => {
		console.log('id', id)
		fetchOneShelter(id)
	}

	return (
		<div className="shelters-wrapper">
			{map(shelters, (shelter) => {
				return (
					<div className="col-xl-6 col-lg-12">
						<div key={shelter.id} className="shelter-item">
							<div className="shelter-name">{get(shelter, 'name')}</div>
							<div className="shelter-cover">
								<Link to={'/utulok/' + shelter.id}>
									<div className="middle" onClick={() => handleShelterDetail(shelter.id)}>
										<div className="text">Viac informacii</div>
									</div>
								</Link>
								<img className="cover" src={shelter.cover} alt="utulok" />
								<div className="location">
									<img src={locationIcon} width="16" />
									<span>{shelter.address.city}</span>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	fetchShelters: () => dispatch(fetchShelters()),
	fetchOneShelter: (id) => dispatch(fetchOneShelter(id))
})

const mapStateToProps = createStructuredSelector({
	shelters: selectCurrentShelters
})

export default connect(mapStateToProps, mapDispatchToProps)(SheltersPage)
