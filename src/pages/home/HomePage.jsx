import React from "react";
import { useHistory } from "react-router-dom";
import { getAccessToken } from "../../utils/auth";

const HomePage = () => {
	const history = useHistory();
	const token = getAccessToken();

	if (!token) {
		history.push("/prihlasenie");
	}

	return <div className="home-wrapper">HOME PAGE</div>;
};

export default HomePage;
