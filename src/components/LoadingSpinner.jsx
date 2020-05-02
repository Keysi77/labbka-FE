import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import './components.sass'

const LoadingSpinner = props => {
	const { loading } = props

	const override = css`
		display: block;
		margin: 0 auto;
		border-color: #f21c0a;
		position: absolute;
	`
	return (
		<div className={'loading-spinner'}>
			<ClipLoader css={override} size={52} color={'#123abc'} loading={loading} />
		</div>
	)
}

LoadingSpinner.propTypes = {
	loading: PropTypes.bool.isRequired
}

export default LoadingSpinner
