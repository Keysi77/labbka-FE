import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectOneShelter } from "../../redux/shelters/shelters.selectors";
import { get } from "lodash";

import "./ShelterDetail.sass";

// TODO: nastylovat detail utulku
const ShelterDetail = ({ shelter }) => {
	return <div>{get(shelter, "name")}</div>;
};

ShelterDetail.propTypes = {
	shelter: PropTypes.shape({
		name: PropTypes.string
	})
};

const mapStateToProps = createStructuredSelector({
	shelter: selectOneShelter
});

export default connect(mapStateToProps)(ShelterDetail);
