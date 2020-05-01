import React from 'react'
import SiteMenu from '../pages/Menu/SiteMenu'

function Layout({ children }) {
	return (
		<div className="layout-wrapper">
			<SiteMenu>{children}</SiteMenu>
		</div>
	)
}

export default Layout
