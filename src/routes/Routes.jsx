import React from "react"
import { Switch, withRouter } from "react-router-dom"
import { compose } from "redux"
import * as PropTypes from "prop-types"
import { withTranslation } from "react-i18next"
// Routes
import PublicRoute from "../routes/PublicRoute"
// Layouts
import Layout from "../layouts/Layout"
// Pages
import NotFoundPage from "../pages/NotFoundPage"
import AnimalsPage from "../pages/Animals/AnimalsPage"
import SheltersPage from "../pages/Shelters/SheltersPage"
import HomePage from "../pages/Home/HomePage"
import StoriesPage from "../pages/Stories/StoriesPage"
import SignInPage from "../pages/Authorization/SignInPage"
import ShelterDetailPage from "../pages/ShelterDetailPage/ShelterDetailPage"
import LostAnimalsPage from "../pages/LostAnimals/LostAnimalsPage"
import UserProfilePage from "../pages/UserProfile/UserProfilePage"
import AnimalDetailPage from "../pages/AnimalDetail/AnimalDetailPage"

const Routes = ({ t }) => {
	Routes.propTypes = {
		t: PropTypes.func.isRequired,
	}
	// TODO: spravit Auth rooty pre autorizovanie
	return (
		<Switch>
			<PublicRoute
				path={t("paths:index")}
				component={HomePage}
				layout={Layout}
				exact
			/>
			<PublicRoute
				path={t("paths:zvieratka-na-adopciu")}
				component={AnimalsPage}
				layout={Layout}
				exact
			/>
			<PublicRoute
				path={t("paths:utulky")}
				component={SheltersPage}
				layout={Layout}
				exact
			/>
			<PublicRoute
				path={t("paths:utulok/{{shelterId}}")}
				component={ShelterDetailPage}
				layout={Layout}
				exact
			/>
			<PublicRoute
				path={t("paths:detail-zvieratka/{{animalId}}")}
				component={AnimalDetailPage}
				layout={Layout}
				exact
			/>
			<PublicRoute
				path={t("paths:pribehy")}
				component={StoriesPage}
				layout={Layout}
				exact
			/>
			<PublicRoute
				path={t("paths:stratene-zvieratka")}
				component={LostAnimalsPage}
				layout={Layout}
				exact
			/>
			<PublicRoute
				path={t("paths:profil/{{userId}}")}
				component={UserProfilePage}
				layout={Layout}
				exact
			/>
			<PublicRoute
				path={t("paths:prihlasenie")}
				component={SignInPage}
				exact
			/>
			<PublicRoute component={NotFoundPage} exact />
		</Switch>
	)
}
export default compose(withTranslation(), withRouter)(Routes)
