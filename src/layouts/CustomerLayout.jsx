import React, { Component } from 'react'
// import NavigationSimple from "./header/NavigationSimple"

class CustomerLayout extends Component {
	render() {
		return (
			<div className={'layout customer'}>
				{/* <NavigationSimple /> */}
				<div className="container-customer">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default CustomerLayout
