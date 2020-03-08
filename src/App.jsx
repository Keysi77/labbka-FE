import React from "react";
// Router
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router";
import Routes from "./routes/Routes";
import { history } from "./utils/history";
// Material Provider
import { MuiThemeProvider } from "material-ui/styles";
// Styly
import "antd/dist/antd.css";
import "./App.sass";

function App() {
	return (
		<MuiThemeProvider>
			<BrowserRouter>
				<Router history={history}>
					<Routes />
				</Router>
			</BrowserRouter>
		</MuiThemeProvider>
	);
}
export default App;
