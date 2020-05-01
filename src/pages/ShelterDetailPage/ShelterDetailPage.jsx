import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectOneShelter } from '../../redux/shelters/shelters.selectors'
import { get } from 'lodash'

import './ShelterDetailPage.sass'

// TODO: nastylovat detail utulku
const ShelterDetailPage = ({ shelter }) => {
	return <div>{get(shelter, 'name')}</div>
}

ShelterDetailPage.propTypes = {
	shelter: PropTypes.shape({
		name: PropTypes.string
	})
}

const mapStateToProps = createStructuredSelector({
	shelter: selectOneShelter
})

export default connect(mapStateToProps)(ShelterDetailPage)
