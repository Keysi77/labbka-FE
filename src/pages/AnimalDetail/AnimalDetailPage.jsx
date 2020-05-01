import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectOneAnimal } from '../../redux/animals/animals.selectors'
import { get, map } from 'lodash'
import { Avatar, Row, Col, Modal, Button } from 'antd'

import { plemenoIcon, cakeIcon, genderIcon, sizeIcon, weightIcon, loyaltyIcon } from '../../utils/icons'

// import ReactMapGL, { Marker, Popup } from "react-map-gl";

import { formatSize } from '../../utils/animalTextFormatters'

// Components
import LightboxGallery from '../../components/LightboxGallery'
import AnimalInfoItem from './components/AnimalInfoItem'

import './AnimalDetailPage.sass'

class AnimalDetailPage extends Component {
	static propTypes = {
		animal: PropTypes.shape
	};

	state = {
		isOpen: false,
		viewPort: {
			latitude: 48.736279,
			longitude: 19.146191,
			zoom: 6.7,
			width: '100%',
			height: '500px'
		}
	}

	render() {
		const { animal } = this.props

		function info() {
			// TODO: sprvit kontent pre modal a odpratat do osbitneho comonentu
			Modal.info({
				title: 'This is a notification message',
				content: (
					<div>
						<p>some messages...some messages...</p>
						<p>some messages...some messages...</p>
					</div>
				),
				onOk() {}
			})
		}

		// ! Pre mapu
		// const latitude = get(animal.ownerInfo, "address.lat");
		// const longitude = get(animal.ownerInfo, "address.lon");

		const shelterAvatar = get(animal, 'userRef.avatar')

		const gallery = get(animal, 'gallery')
		const { isOpen } = this.state
		// const latitude = get(shelter, "address.lat");
		// const longitude = get(shelter, "address.lon");

		return (
			<div className="animal-detail-wrapper">
				<div className="animal-wrapper box-shadow">
					<Row>
						<Col span={8}>
							<div className="animal-image" onClick={() => this.setState({ isOpen: true })}>
								<img
									className="animal-covored-photo"
									src={gallery && gallery[0]}
									alt="fotka zvieratka"
								/>
							</div>
						</Col>
						<Col span={16}>
							<div className="row" style={{ marginBottom: '16px' }}>
								<div className="col-12 d-flex align-items-center" style={{ flexWrap: 'wrap' }}>
									{map(gallery, (photo, key) => (
										<div key={key} className={'photo-item'}>
											<img
												onClick={() =>
													this.setState({
														isOpen: true,
														photoIndex: key
													})}
												src={photo}
												alt="item"
											/>
										</div>
									))}
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<div className="animal-info">
								<div className="animal-name">
									<h1>{get(animal, 'name', 'bez mena')}</h1>
								</div>
								<div className="animal-description">{get(animal, 'desc', 'bez popisu')}</div>
							</div>
						</Col>
					</Row>

					<Row>
						<Col
							className="poster-wrapper"
							// sm={24}
							lg={6}
						>
							<h1> ZVEREJNIL </h1>
							<Row height={350}>
								<div className="avatar">
									<Avatar
										className="avatar"
										shape="square"
										size={52}
										src={get(animal, 'userRef.avatar')}
									/>
								</div>
								<div className="poster-info">
									<div className="name">Michal Bella</div>
									<div className="added">15.3.2020</div>
								</div>
							</Row>
							<Row>
								<div className="contact-info">
									<div className="phone">0902 369 398</div>
									<div className="mail">bellamichal@gmail.com</div>
								</div>
							</Row>
						</Col>
						<Col
							// sm={24}
							lg={9}
							className="info-wrapper"
						>
							<h1> INFO </h1>
							<Row>
								<AnimalInfoItem
									avatarPath={plemenoIcon}
									infoName="Plemeno"
									infoDescription={get(animal, 'breedRef.name', '-')}
								/>
								<AnimalInfoItem
									avatarPath={sizeIcon}
									infoName="Velkost"
									infoDescription={formatSize(get(animal, 'size'))}
								/>
							</Row>
							<Row style={{ marginTop: '10px' }}>
								<AnimalInfoItem avatarPath={genderIcon} infoName="Pohlavie" infoDescription="Samicka" />
								<AnimalInfoItem avatarPath={weightIcon} infoName="Vaha" infoDescription="4kg" />
							</Row>
							<Row style={{ marginTop: '10px' }}>
								<AnimalInfoItem avatarPath={cakeIcon} infoName="Vek" infoDescription="Samicka" />
								<AnimalInfoItem avatarPath={loyaltyIcon} infoName="Povaha" infoDescription="4kg" />
							</Row>
						</Col>
						<Col
							// sm={24}
							lg={9}
							className="info-wrapper"
						>
							<h1> ZDRAVOTNY STAV </h1>
							<Row>
								{/* // TODO: chyba ikonka noznice */}
								<AnimalInfoItem avatarPath={plemenoIcon} infoName="Kastracia" infoDescription="Ano" />
								<AnimalInfoItem avatarPath={sizeIcon} infoName="Odcervenie" infoDescription="Ano" />
							</Row>
							<Row style={{ marginTop: '10px' }}>
								<AnimalInfoItem avatarPath={genderIcon} infoName="Ockovanie" infoDescription="ano" />
								<AnimalInfoItem avatarPath={sizeIcon} infoName="Odbsivenie" infoDescription="ano" />
							</Row>
							<Row style={{ marginTop: '10px' }}>
								<AnimalInfoItem avatarPath={genderIcon} infoName="Ocipovanie" infoDescription="nie" />
							</Row>
						</Col>
					</Row>
					<Row>
						<Button className={'adoption-button'} onClick={info}>
							Adoptovat
						</Button>
					</Row>
				</div>
				<div className="right-wrapper">
					<div className="shelter-wrapper box-shadow">
						<div className="shelter-avatar">
							<Avatar className="avatar" size={92} src={shelterAvatar} />
						</div>
						<div className="shelter-name">{get(animal.ownerInfo, 'address.city')}</div>
						<div className="shelter-address">{get(animal, 'ownerInfo.address.address')}</div>
						<div className="shelter-info">
							<div className="phone">0902 258 687</div>
							<div className="email">jdfskjdf@gmail.com</div>
						</div>
					</div>

					<div>
						{/* TODO: neda sa galeria otvorit po prvom zatvoreni hned na to druhy krat */}
						{isOpen && <LightboxGallery visible={true} gallery={gallery} />}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	animal: selectOneAnimal
})

export default connect(mapStateToProps)(AnimalDetailPage)
