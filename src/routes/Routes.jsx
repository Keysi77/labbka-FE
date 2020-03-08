import React from "react";
import { Switch, withRouter } from "react-router-dom";
import { compose } from "redux";
// Autorizacia Routes
import PublicRoute from "../routes/PublicRoute";
import { withTranslation } from "react-i18next";
// Komponenty
import Layout from "../layouts/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import Animals from "../pages/animals/AnimalsPage";
import Shelters from "../pages/shelters/SheltersPage";
import AnimalDetail from "../components/animal-detail/AnimalDetail";
import Home from "../pages/home/HomePage";
import Stories from "../pages/stories/StoriesPage";
import * as PropTypes from "prop-types";
import SignInSide from "../pages/authorization/SignInPage";

const Routes = ({ t }) => {
	Routes.propTypes = {
		t: PropTypes.func.isRequired
	};
	return (
		<div id={"body"} style={{ height: "100%", width: "100%" }}>
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
		</div>
	);
};
export default compose(withTranslation(), withRouter)(Routes);
