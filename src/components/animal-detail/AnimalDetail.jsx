import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOneAnimal } from "../../redux/animals/animals.selectors";

import "./AnimalDetail.sass";

// TODO: spravit template detail zvieratka
function AnimalDetail({ animal }) {
	AnimalDetail.propTypes = {
		animal: PropTypes.shape(),
		unsibscribeOneAnimal: PropTypes.func
	};

	return (
		<div className="animal-detail-wrapper">
			<div className="animal-wrapper">
				ANIMAL
				{animal.name}
				{animal.size}
				{animal.gender}
			</div>
			<div className="right-wrapper">
				<div className="shelter-wrapper">shelter</div>
				<div className="map-wrapper">mapa</div>
			</div>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	animal: selectOneAnimal
});
export default connect(mapStateToProps)(AnimalDetail);
