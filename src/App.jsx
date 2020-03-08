import React, { Suspense } from "react";
// Router
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router";
import Routes from "./routes/Routes";
import { history } from "./utils/history";
// Styly
import "antd/dist/antd.css";
import "./App.sass";
import i18n from "./utils/localization/i18n";

function App() {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<I18nextProvider i18n={i18n}>
				<BrowserRouter>
					<Router history={history}>
						<Routes />
					</Router>
				</BrowserRouter>
			</I18nextProvider>
		</Suspense>
	);
}
export default App;
