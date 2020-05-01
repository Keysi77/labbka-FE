import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { size } from 'lodash'

import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

class LightboxGallery extends Component {
	static propTypes = {
		gallery: PropTypes.array.isRequired,
		visible: PropTypes.bool.isRequired
	}

	state = {
		photoIndex: 0,
		isOpen: this.props.visible
	}

	render() {
		const { gallery } = this.props
		const { isOpen, photoIndex } = this.state

		return (
			<div>
				{isOpen && (
					<Lightbox
						mainSrc={gallery[photoIndex]}
						nextSrc={gallery[(photoIndex + 1) % size(gallery)]}
						prevSrc={gallery[(photoIndex + size(gallery) - 1) % size(gallery)]}
						onCloseRequest={() => this.setState({ isOpen: false })}
						onMovePrevRequest={() =>
							this.setState({
								photoIndex: (photoIndex + size(gallery) - 1) % size(gallery)
							})}
						onMoveNextRequest={() =>
							this.setState({
								photoIndex: (photoIndex + 1) % size(gallery)
							})}
					/>
				)}
			</div>
		)
	}
}

export default LightboxGallery
