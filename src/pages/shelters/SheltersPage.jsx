import React, { useEffect } from "react";
import * as PropTypes from "prop-types";
// import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { fetchShelters } from "../../redux/shelters/shelters.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentShelters } from "../../redux/shelters/shelters.selectors";
import { map } from "lodash";
import "./SheltersPage.sass";
import locationIcon from "../../assets/icons/location_on.svg";

const SheltersPage = props => {
	SheltersPage.propTypes = {
		shelters: PropTypes.arrayOf(PropTypes.object).isRequired,
		fetchShelters: PropTypes.func
		// t: PropTypes.func.isRequired
	};

	const { fetchShelters, shelters } = props;

	// const { t } = useTranslation();
	useEffect(() => {
		fetchShelters();
	}, []);

	console.log("shelters", shelters);

	const handleShelterDetail = id => {
		// TODO: redirect na detail utulku
	};

	return (
		<div className="shelters-wrapper">
			{/* <p>{t("translation:Utulky")}</p> */}
			{map(shelters, shelter => {
				return (
					<div className="shelter-item">
						<div className="shelter-info">
							<div className="name">{shelter.name}</div>
							<div className="description">{shelter.desc}</div>
						</div>
						<div className="shelter-cover">
							<div
								className="middle"
								onClick={() => handleShelterDetail(shelter.id)}
							>
								<div className="text">Viac informacii</div>
							</div>
							<img className="cover" src={shelter.cover} alt="utulok" />
							<div className="location">
								<img src={locationIcon} width="16" />
								<span>{shelter.address.city}</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchShelters: () => dispatch(fetchShelters())
});

const mapStateToProps = createStructuredSelector({
	shelters: selectCurrentShelters
});

export default connect(mapStateToProps, mapDispatchToProps)(SheltersPage);
