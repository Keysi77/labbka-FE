import React from "react";
import { Switch, withRouter } from "react-router-dom";
import { compose } from "redux";
// Autorizacia Routes
import PublicRoute from "../routes/PublicRoute";
import { withTranslation } from "react-i18next";
// Komponenty
import Layout from "../layouts/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import Animals from "../pages/Animals/AnimalsPage";
import Shelters from "../pages/Shelters/SheltersPage";
import AnimalDetail from "../components/AnimalDetail/AnimalDetail";
import Home from "../pages/Home/HomePage";
import Stories from "../pages/Stories/StoriesPage";
import * as PropTypes from "prop-types";
import SignInSide from "../pages/Authorization/SignInPage";
import ShelterDetail from "../components/ShelterDetail/ShelterDetail";

const Routes = ({ t }) => {
	Routes.propTypes = {
		t: PropTypes.func.isRequired
	};
	return (
			<Switch>
				<PublicRoute path={"/"} component={Home} layout={Layout} exact />
				<PublicRoute
					path={t("paths:adopcia")}
					component={Animals}
					layout={Layout}
					exact
				/>
				<PublicRoute
					path={"/utulky"}
					component={Shelters}
					layout={Layout}
					exact
				/>
				<PublicRoute
					path={"/utulok/:shelterId"}
					component={ShelterDetail}
					layout={Layout}
					exact
				/>
				<PublicRoute
					path={"/detail-zvieratka/:animalId"}
					component={AnimalDetail}
					layout={Layout}
					exact
				/>
				<PublicRoute
					path={"/pribehy"}
					component={Stories}
					layout={Layout}
					exact
				/>
				<PublicRoute path={"/prihlasenie"} component={SignInSide} exact />
				<PublicRoute component={NotFoundPage} exact />
			</Switch>
	);
};
export default compose(withTranslation(), withRouter)(Routes);
