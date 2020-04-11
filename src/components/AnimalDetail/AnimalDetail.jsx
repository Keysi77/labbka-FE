import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOneAnimal } from "../../redux/animals/animals.selectors";
import { get, size } from "lodash";
import "./AnimalDetail.sass";
import { Avatar, Row, Col, Modal, Button } from "antd";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
import plemenoIcon from "../../assets/icons/animal-detail/plemeno.svg";
import cakeIcon from "../../assets/icons/torta.svg";
import genderIcon from "../../assets/icons/pohlavie.svg";
import sizeIcon from "../../assets/icons/velkost.svg";
import weightIcon from "../../assets/icons/animal-detail/vaha.svg";
import loyaltyIcon from "../../assets/icons/animal-detail/povaha.svg";

import likeIcon from "../../assets/icons/like_filled.svg";
import commentIcon from "../../assets/icons/comment.svg";
import shareIcon from "../../assets/icons/share.svg";
import { formatSize } from "../../utils/animalTextFormatters";

export const InfoItem = props => {
	const { avatarPath, infoName, infoDescription } = props;
	return (
		<Col span={12} className="info-item" style={{ display: "flex" }}>
			<div className="avatar">
				<Avatar className="avatar" shape="square" size={24} src={avatarPath} />
			</div>
			<div className="info">
				<div className="info-name">{infoName}</div>
				<div className="info-description">{infoDescription}</div>
			</div>
		</Col>
	);
};

class AnimalDetail extends Component {
	// static propTypes = {
	// 	animal: PropTypes.shape
	// };

	state = {
		photoIndex: 0,
		isOpen: false,
		viewPort: {
			latitude: 48.736279,
			longitude: 19.146191,
			zoom: 6.7,
			width: "100%",
			height: "500px"
		}
	};

	render() {
		const { animal } = this.props;

		function info() {
			// TODO: sprvit kontent pre modal a odpratat do osbitneho comonentu
			Modal.info({
				title: "This is a notification message",
				content: (
					<div>
						<p>some messages...some messages...</p>
						<p>some messages...some messages...</p>
					</div>
				),
				onOk() {}
			});
		}

		// ! Pre mapu
		// const latitude = get(animal.ownerInfo, "address.lat");
		// const longitude = get(animal.ownerInfo, "address.lon");

		const shelterAvatar = get(animal, "userRef.avatar");

		const gallery = get(animal, "gallery");
		const { photoIndex, isOpen } = this.state;
		// const latitude = get(shelter, "address.lat");
		// const longitude = get(shelter, "address.lon");
		console.log("animal", animal);

		return (
			<div className="animal-detail-wrapper">
				<div className="animal-wrapper box-shadow">
					<Row>
						<Col span={8}>
							<div
								className="animal-image"
								onClick={() => this.setState({ isOpen: true })}
							>
								<img
									className="animal-covored-photo"
									src={gallery && gallery[0]}
									alt="fotka zvieratka"
								/>
							</div>
						</Col>
						<Col span={16}>
							<div className="animal-info">
								<div className="animal-name">
									<h1>{get(animal, "name", "bez mena")}</h1>
								</div>
								<div className="animal-description">
									{get(animal, "desc", "bez popisu")}
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col
							className="poster-wrapper"
							// sm={24}
							lg={6}
							style={{ borderRight: "1px dotted silver", padding: "10px" }}
						>
							<span>Zverejnil</span>
							<Row height={350}>
								<div className="avatar">
									<Avatar
										className="avatar"
										shape="square"
										size={52}
										src={get(animal, "userRef.avatar")}
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
							style={{ borderRight: "1px dotted silver" }}
							className="info-wrapper"
						>
							<h1> INFO </h1>
							<Row>
								<InfoItem
									avatarPath={plemenoIcon}
									infoName="Plemeno"
									infoDescription={get(animal, "breedRef.name", "-")}
								/>
								<InfoItem
									avatarPath={sizeIcon}
									infoName="Velkost"
									infoDescription={formatSize(get(animal, "size"))}
								/>
							</Row>
							<Row style={{ marginTop: "10px" }}>
								<InfoItem
									avatarPath={genderIcon}
									infoName="Pohlavie"
									infoDescription="Samicka"
								/>
								<InfoItem
									avatarPath={weightIcon}
									infoName="Vaha"
									infoDescription="4kg"
								/>
							</Row>
							<Row style={{ marginTop: "10px" }}>
								<InfoItem
									avatarPath={cakeIcon}
									infoName="Vek"
									infoDescription="Samicka"
								/>
								<InfoItem
									avatarPath={loyaltyIcon}
									infoName="Povaha"
									infoDescription="4kg"
								/>
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
								<InfoItem
									avatarPath={plemenoIcon}
									infoName="Kastracia"
									infoDescription="Ano"
								/>
								<InfoItem
									avatarPath={sizeIcon}
									infoName="Odcervenie"
									infoDescription="Ano"
								/>
							</Row>
							<Row style={{ marginTop: "10px" }}>
								<InfoItem
									avatarPath={genderIcon}
									infoName="Ockovanie"
									infoDescription="ano"
								/>
								<InfoItem
									avatarPath={sizeIcon}
									infoName="Odbsivenie"
									infoDescription="ano"
								/>
							</Row>
							<Row style={{ marginTop: "10px" }}>
								<InfoItem
									avatarPath={genderIcon}
									infoName="Ocipovanie"
									infoDescription="nie"
								/>
							</Row>
						</Col>
					</Row>
					<Row>
						<Button onClick={info}>Adoptovat</Button>
					</Row>
				</div>
				<div className="right-wrapper">
					<div className="shelter-wrapper box-shadow">
						<div className="shelter-avatar">
							<Avatar className="avatar" size={92} src={shelterAvatar} />
						</div>
						<div className="shelter-name">
							{get(animal.ownerInfo, "address.city")}
						</div>
						<div className="shelter-address">
							{get(animal, "ownerInfo.address.address")}
						</div>
						<div className="shelter-info">
							<div className="phone">0902 258 687</div>
							<div className="email">jdfskjdf@gmail.com</div>
						</div>
					</div>
					<div className="map-wrapper box-shadow">
						MAPA
						{/* <ReactMapGL
							style={{ borderRadius: "25px " }}
							mapboxApiAccessToken="pk.eyJ1Ijoia2V5c2k3NyIsImEiOiJjazdtenF3cWwwOHF0M21ubjZncWw3M2U4In0.tIxoS5G3YmQXmitpQQawOw"
							{...this.state.viewPort}
							// onViewportChange={this.setState(viewPort)}
							mapStyle="mapbox://styles/keysi77/ck7n056760l671ipank5701u0"
						>
							<Marker latitude={48.736279} longitude={19.146191}>
								<div>You are here</div>
							</Marker>
						</ReactMapGL> */}
					</div>

					<div>
						{isOpen && (
							<Lightbox
								mainSrc={gallery[photoIndex]}
								nextSrc={gallery[(photoIndex + 1) % size(gallery)]}
								prevSrc={
									gallery[(photoIndex + size(gallery) - 1) % size(gallery)]
								}
								onCloseRequest={() => this.setState({ isOpen: false })}
								onMovePrevRequest={() =>
									this.setState({
										photoIndex: (photoIndex + size(gallery) - 1) % size(gallery)
									})
								}
								onMoveNextRequest={() =>
									this.setState({
										photoIndex: (photoIndex + 1) % size(gallery)
									})
								}
							/>
						)}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	animal: selectOneAnimal
});
export default connect(mapStateToProps)(AnimalDetail);
