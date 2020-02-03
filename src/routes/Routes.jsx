import React from 'react'
import { Switch, withRouter } from 'react-router-dom'
// Autorizacia Routes
import PublicRoute from '../routes/PublicRoute'
// Komponenty
import Layout from '../layouts/Layout'
import NotFoundPage from '../pages/NotFoundPage'
import Animals from '../pages/animals/animals.component'
import Shelters from '../pages/shelters/shelters.component'
import AnimalDetail from '../components/animal-detail/animal-detail.component'
import Home from '../pages/home/home.component'
import Stories from '../pages/stories/stories.component'

class Routes extends React.Component {
	render = () => {
		return (
			<div id={ 'body' } style={{ height: '100%' }}>
				<Switch>
					<PublicRoute
						exact
						path={'/'}
						component={ Home }
						layout={ Layout }
					/>
					<PublicRoute
						path={'/zvieratka-na-adopciu'}
						component={ Animals }
						layout={ Layout }
					/>
					<PublicRoute
						path={'/utulky'}
						component={ Shelters }
						layout={ Layout }
					/>
					<PublicRoute
						path={'/detail-zvieratka/:animalId'}
						component={ AnimalDetail }
						layout={ Layout }
					/>
					<PublicRoute
						path={'/pribehy'}
						component={ Stories }
						layout={ Layout }
					/>

					<PublicRoute
						component={ NotFoundPage }
						layout={ Layout }
					/>

				</Switch>
			</div>
		)
	}
}

export default withRouter(Routes)
