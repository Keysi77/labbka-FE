import React, { Suspense } from 'react'
// Router
import { BrowserRouter } from 'react-router-dom'
import { Router } from 'react-router'
import Routes from './routes/Routes'
import { history } from './utils/history'
// i18
import i18n from './utils/localization/i18n'
import { I18nextProvider } from 'react-i18next'
// components
import LoadingSpinner from './components/LoadingSpinner'
// Styly
import 'antd/dist/antd.css'
import './App.sass'

function App() {
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<I18nextProvider i18n={i18n}>
				<BrowserRouter>
					<Router history={history}>
						<Routes />
					</Router>
				</BrowserRouter>
			</I18nextProvider>
		</Suspense>
	)
}
export default App
