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
			<div className="animal-profile">
				ANIMAL
				{animal.name}
				{animal.size}
				{animal.gender}
			</div>
			<div className="right-wrapper">
				<div className="shelter-profile">Utulok</div>
				<div className="map">mapa</div>
			</div>
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	animal: selectOneAnimal
});
export default connect(mapStateToProps)(AnimalDetail);
