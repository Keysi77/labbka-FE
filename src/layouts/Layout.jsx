import React from "react";
import SideMenu2 from "../pages/menu/SideMenu";

function Layout({ children }) {
	return (
		<div className="layout-wrapper">
			<SideMenu2>{children}</SideMenu2>
		</div>
	);
}

export default Layout;
