import React from 'react'
import SideMenu from '../pages/menu/side-menu.component'
import './layout.styles.sass'

function Layout({ children }) {
	return (
		<div  className="layout-wrapper">
			<SideMenu className="side-bar-menu" />
			<div>{children}</div>
		</div>
	)
}

export default Layout
