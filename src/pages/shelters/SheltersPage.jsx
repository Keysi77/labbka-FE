import React from "react";
import * as PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const SheltersPage = () => {
	SheltersPage.propTypes = {
		t: PropTypes.func.isRequired
	};

	const { t } = useTranslation();

	return (
		<div className="shelters-wrapper">
			<p>{t("translation:Utulky")}</p>
		</div>
	);
};

export default SheltersPage;
