import React, { useState, useEffect, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOneAnimal } from "../../redux/animals/animals.selectors";
import { get, size } from "lodash";
import "./AnimalDetail.sass";
import { Avatar } from "antd";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// TODO: spravit template detail zvieratka
class AnimalDetail extends Component {
	static propTypes = {
		animal: PropTypes.shape()
	};

	state = {
		photoIndex: 0,
		isOpen: false
	};
	render() {
		const { animal } = this.props;
		const shelterAvatar = get(animal, "userRef.avatar");
		const lat = get(animal.ownerInfo, "address.lat");
		const lon = get(animal.ownerInfo, "address.lon");

		// const [photoIndex, setPhotoIndex] = useState(0);
		// const [isOpen, setIsOpen] = useState(false);

		// const [images, setImages] = useState([]);
		// useEffect(() => {
		// 	setImages(get(animal, "gallery"));
		// }, []);

		const gallery = get(animal, "gallery");

		console.log("animal", animal);

		const { photoIndex, isOpen } = this.state;

		return (
			<div className="animal-detail-wrapper">
				<div className="animal-wrapper">
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
				</div>

				<div>
					{isOpen && (
						<Lightbox
							mainSrc={gallery[photoIndex]}
							nextSrc={gallery[(photoIndex + 1) % gallery.length]}
							prevSrc={
								gallery[(photoIndex + gallery.length - 1) % gallery.length]
							}
							onCloseRequest={() => this.setState({ isOpen: false })}
							onMovePrevRequest={() =>
								this.setState({
									photoIndex: (photoIndex + gallery.length - 1) % gallery.length
								})
							}
							onMoveNextRequest={() =>
								this.setState({
									photoIndex: (photoIndex + 1) % gallery.length
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
							{get(animal.ownerInfo, "address.address")}
						</div>
						<div className="shelter-info">
							<div className="phone">0902 258 687</div>
							<div className="email">jdfskjdf@gmail.com</div>
						</div>
					</div>
					IKONKA
					<img src="/labbka_icon.png" alt="" />
					<div className="map-wrapper">MAPA</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	animal: selectOneAnimal
});
export default connect(mapStateToProps)(AnimalDetail);
