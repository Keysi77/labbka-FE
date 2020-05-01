import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { Layout, Menu, Avatar, Button } from 'antd'
import { get } from 'lodash'
import labbkaLogo from '../../assets/logos/labbka_logo.png'

import { UserOutlined, HomeFilled, CompassFilled } from '@ant-design/icons'

import { logoutUser } from '../../redux/auth/auth.actions'
import { selectLoggedUser } from '../../redux/auth/auth.selectors'

import './SiteMenu.sass'

const { Content, Footer, Sider, Header } = Layout

const PawIcon = () => (
	<span role="img" className="anticon">
		<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
			<circle cx="4.5" cy="9.5" r="2.5" />
			<circle cx="9" cy="5.5" r="2.5" />
			<circle cx="15" cy="5.5" r="2.5" />
			<circle cx="19.5" cy="9.5" r="2.5" />
			<path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z" />
			<path d="M0 0h24v24H0z" fill="none" />
		</svg>
	</span>
)

const ShelterIcon = () => (
	<span role="img" className="anticon">
		<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
		</svg>
	</span>
)

const StoriesIcon = () => (
	<span role="img" className="anticon">
		<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
		</svg>
	</span>
)

const SiteMenu = ({ children, logoutUser, loggedUser }) => {
	SiteMenu.propTypes = {
		logoutUser: PropTypes.func,
		loggedUser: PropTypes.shape()
	}

	const handleLogOutUser = () => {
		logoutUser()
	}

	return (
		<Layout>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0
				}}
				width={300}
			>
				<div className="avatar">
					<img src={labbkaLogo} alt="Labbka" width="250" />
					<Link to={'/profil/' + get(loggedUser, 'id')}>
						<Avatar size={92} src={get(loggedUser, 'avatar')} icon={<UserOutlined />} />
					</Link>
				</div>
				<Menu theme="dark" mode="inline">
					<Menu.Item key="1">
						<HomeFilled />
						<NavLink to="/">Domov</NavLink>
					</Menu.Item>
					<Menu.Item key="2">
						<PawIcon />
						<NavLink to="/zvieratka-na-adopciu">Na adopciu</NavLink>
					</Menu.Item>
					<Menu.Item key="3">
						<ShelterIcon />
						<NavLink to="/utulky">Utulky</NavLink>
					</Menu.Item>
					<Menu.Item key="4">
						<StoriesIcon />
						<NavLink to="/pribehy">Pribehy</NavLink>
					</Menu.Item>
					<Menu.Item key="5">
						<CompassFilled />
						<NavLink to="/stratene-zvieratka">Stratene</NavLink>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className="site-layout" style={{ marginLeft: 300 }}>
				<Header>
					<div className="page-name">Nazov page</div>
					<div className="page-name">Menu item1 - o nas</div>
					<div className="page-name">Menu item2 - kontakt</div>
					<div className="user-info">
						<div className="user-name">{loggedUser ? loggedUser.name : 'Neprihlaseny'}</div>
						<Button htmlType="button" onClick={() => handleLogOutUser()}>
							Odhlasit
						</Button>
						<Avatar size={32} src={get(loggedUser, 'avatar')} icon={<UserOutlined />} />
					</div>
				</Header>
				<Content className="site-layout-background content">{children}</Content>
				<Footer style={{ textAlign: 'center' }}>Labbka company</Footer>
			</Layout>
		</Layout>
	)
}

const mapStateToProps = createStructuredSelector({
	loggedUser: selectLoggedUser
})

const mapDispatchToProps = (dispatch) => ({
	logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(SiteMenu)
