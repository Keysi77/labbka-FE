import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

class PublicRoute extends Route {
	static propTypes = {
		component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
			.isRequired,
		layout: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
	};

	render = () => {
		const Layout = this.props.layout;
		const Component = this.props.component;
		if (this.props.layout) {
			return (
				<Layout {...this.props}>
					<Component {...this.props} />
				</Layout>
			);
		}
		return <Component {...this.props} />;
	};
}

export default PublicRoute;
