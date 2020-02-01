import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

class PublicRoute extends Route {
	static propTypes = {
		component: PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
		]).isRequired,
		layout: PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.object,
		]),
	}

	render = () => {
		if (this.props.layout){
			return (
				<this.props.layout {...this.props}>
					<this.props.component {...this.props} />
				</this.props.layout>
			)
		}
		return (
			<this.props.component {...this.props} />
		)
	}
}

export default PublicRoute

