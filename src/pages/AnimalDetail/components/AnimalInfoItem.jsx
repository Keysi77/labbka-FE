import React from 'react'
import { Avatar, Col } from 'antd'
import PropTypes from 'prop-types'

const AnimalInfoItem = (props) => {
	const { avatarPath, infoName, infoDescription } = props

	return (
		<Col span={12} className="info-item" style={{ display: 'flex' }}>
			<div className="avatar">
				<Avatar className="avatar" shape="square" size={24} src={avatarPath} />
			</div>
			<div className="info">
				<div className="info-name">{infoName}</div>
				<div className="info-description">{infoDescription}</div>
			</div>
		</Col>
	)
}

AnimalInfoItem.propTypes = {
	avatarPath: PropTypes.string.isRequired,
	infoName: PropTypes.string.isRequired,
	infoDescription: PropTypes.string.isRequired,
}

export default AnimalInfoItem
