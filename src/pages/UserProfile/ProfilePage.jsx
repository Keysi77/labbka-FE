import React from 'react'
import { connect } from 'react-redux'
import { selectLoggedUser } from '../../redux/auth/auth.selectors'
import { createStructuredSelector } from 'reselect'
import { get } from 'lodash'
import PropTypes from 'prop-types'

const ProfilePage = (props) => {
	const { loggedUser } = props
	return (
		<div>
			<h1>{get(loggedUser, 'name')}</h1>
		</div>
	)
}
const mapStateToProps = createStructuredSelector({
	loggedUser: selectLoggedUser
})

ProfilePage.propTypes = {
	loggedUser: PropTypes.shape()
}

export default connect(mapStateToProps, null)(ProfilePage)
