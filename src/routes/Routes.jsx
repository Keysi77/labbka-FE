import React from "react";
import { Switch, withRouter } from "react-router-dom";
// Autorizacia Routes
import PublicRoute from "../routes/PublicRoute";
// Komponenty
import Layout from "../layouts/Layout";
import NotFoundPage from "../pages/NotFoundPage";
import Animals from "../pages/animals/AnimalsPage";
import Shelters from "../pages/shelters/SheltersPage";
import AnimalDetail from "../components/animal-detail/AnimalDetail";
import Home from "../pages/home/HomePage";
import Stories from "../pages/stories/StoriesPage";
import SignInSide from "../pages/sign-in/SignInPage";

class Routes extends React.Component {
	render = () => {
		return (
			<div id={"body"} style={{ height: "100%", width: "100%" }}>
				<Switch>
					<PublicRoute exact path={"/"} component={Home} layout={Layout} />
					<PublicRoute
						path={"/zvieratka-na-adopciu"}
						component={Animals}
						layout={Layout}
					/>
					<PublicRoute path={"/utulky"} component={Shelters} layout={Layout} />
					<PublicRoute
						path={"/detail-zvieratka/:animalId"}
						component={AnimalDetail}
						layout={Layout}
					/>
					<PublicRoute path={"/pribehy"} component={Stories} layout={Layout} />

					<PublicRoute exact path={"/prihlasenie"} component={SignInSide} />
					<PublicRoute component={NotFoundPage} />
				</Switch>
			</div>
		);
	};
}

export default withRouter(Routes);
