import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOneAnimal } from "../../redux/animals/animals.selectors";
import { get } from "lodash";
import "./AnimalDetail.sass";
import { Avatar } from "antd";

// TODO: spravit template detail zvieratka
function AnimalDetail({ animal }) {
	AnimalDetail.propTypes = {
		animal: PropTypes.shape(),
		unsibscribeOneAnimal: PropTypes.func
	};

	const shelterAvatar = get(animal, "userRef.avatar");
	const lat = get(animal.ownerInfo, "address.lat");
	const lon = get(animal.ownerInfo, "address.lon");

	return (
		<div className="animal-detail-wrapper">
			<div className="animal-wrapper">
				ANIMAL sdfsdf
				{animal.name}
				{animal.size}
				{animal.gender}
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

const mapStateToProps = createStructuredSelector({
	animal: selectOneAnimal
});
export default connect(mapStateToProps)(AnimalDetail);
