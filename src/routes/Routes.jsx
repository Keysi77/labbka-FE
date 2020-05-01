import React from 'react'
import { Switch, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import * as PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

// Autorizacia Routes
import PublicRoute from '../routes/PublicRoute'

// Komponenty
import Layout from '../layouts/Layout'
import NotFoundPage from '../pages/NotFoundPage'
import Animals from '../pages/Animals/AnimalsPage'
import Shelters from '../pages/Shelters/SheltersPage'
import Home from '../pages/Home/HomePage'
import Stories from '../pages/Stories/StoriesPage'
import SignInSide from '../pages/Authorization/SignInPage'
import ShelterDetail from '../pages/ShelterDetailPage/ShelterDetailPage'
import Losts from '../pages/LostAnimals/LostAnimalsPage'
import UserProfile from '../pages/UserProfile/ProfilePage'
import AnimalDetailPage from '../pages/AnimalDetail/AnimalDetailPage'

const Routes = ({ t }) => {
	Routes.propTypes = {
		t: PropTypes.func.isRequired
	}
	// TODO: spravit Auth rooty pre autorizovanie
	return (
		<Switch>
			<PublicRoute path={'/'} component={Home} layout={Layout} exact />
			<PublicRoute exact path={'/zvieratka-na-adopciu'} component={Animals} layout={Layout} />
			<PublicRoute path={'/utulky'} component={Shelters} layout={Layout} exact />
			<PublicRoute path={'/utulok/:shelterId'} component={ShelterDetail} layout={Layout} exact />
			<PublicRoute path={'/detail-zvieratka/:animalId'} component={AnimalDetailPage} layout={Layout} exact />
			<PublicRoute path={'/pribehy'} component={Stories} layout={Layout} exact />
			<PublicRoute path={'/stratene-zvieratka'} component={Losts} layout={Layout} exact />
			<PublicRoute path={'/profil/:userId'} component={UserProfile} layout={Layout} exact />
			<PublicRoute path={'/prihlasenie'} component={SignInSide} exact />
			<PublicRoute component={NotFoundPage} exact />
		</Switch>
	)
}
export default compose(withTranslation(), withRouter)(Routes)
