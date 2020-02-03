import React from 'react'
import { Switch, withRouter } from 'react-router-dom'

import PublicRoute from '../routes/PublicRoute'

import Layout from '../layouts/Layout'
import DefaultPage from '../pages/Default/DefaultPage'
import NotFoundPage from '../pages/NotFoundPage'
import Animals from '../pages/animals/animals.component'
import Shelters from '../pages/shelters/shelters.component'
import AnimalDetail from '../components/animal-detail/animal-detail.component'

class Routes extends React.Component {
	render = () => {
		return (
			<div id={ 'body' } style={{ height: '100%' }}>
				<Switch>
					{/* Routes */}
					<PublicRoute
						exact
						path={'/'}
						component={ DefaultPage }
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

					{/* Other Routes */}
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
