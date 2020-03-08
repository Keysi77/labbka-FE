import React from "react";
import { compose } from "redux";
import { withTranslation } from "react-i18next";
import * as PropTypes from "prop-types";

const SheltersPage = props => {
	SheltersPage.propTypes = {
		t: PropTypes.func.isRequired
	};

	const { t } = props;

	return (
		<div className="shelters-wrapper">
			<p>{t("paths:adopcia")}</p>
		</div>
	);
};

export default compose(withTranslation())(SheltersPage);
