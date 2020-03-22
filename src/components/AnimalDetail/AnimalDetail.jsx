import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOneAnimal } from "../../redux/animals/animals.selectors";
import { get, size } from "lodash";
import "./AnimalDetail.sass";
import { Avatar } from "antd";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// import ReactMapGL, { Marker, Popup } from "react-map-gl";

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
				<div className="animal-wrapper">
					<div className="animal-info-1">
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
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
							saepe dolor nisi molestiae optio beatae explicabo delectus illum.
							Eveniet commodi in error ut, aperiam provident dolorem excepturi
							nihil fugiat possimus.
						</div>
					</div>
					<div className="animal-info-2">
						<div className="animal-name">
							<h1>{get(animal, "name", "bez mena")}</h1>
						</div>
						<div className="animal-description">
							{get(animal, "desc", "bez popisu")}
						</div>
					</div>
					<div className="animal-info-3">meno zvieratka2</div>
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

				<div className="right-wrapper">
					<div className="shelter-wrapper">
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
					<div className="map-wrapper">
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
				</div>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	animal: selectOneAnimal
});
export default connect(mapStateToProps)(AnimalDetail);
