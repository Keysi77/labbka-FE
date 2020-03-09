import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { Layout, Menu, Avatar, Button } from "antd";
import labbkaLogo from "../../assets/logos/labbka_logo.png";
import {
	BarChartOutlined,
	UserOutlined,
	UploadOutlined,
	VideoCameraOutlined
} from "@ant-design/icons";

import "./SiteMenu.sass";
import { logoutUser } from "../../redux/auth/auth.actions";
import { selectLoggedUser } from "../../redux/auth/auth.selectors";

const { Header, Content, Footer, Sider } = Layout;

const SiteMenu = ({ children, logoutUser, loggedUser }) => {
	SiteMenu.propTypes = {
		logoutUser: PropTypes.func,
		loggedUser: PropTypes.object
	};

	const handleLogOutUser = () => {
		logoutUser();
	};

	// TODO: loggedUser po refreshi zmiznu data zo storu

	return (
		<Layout>
			<Sider
				breakpoint="lg"
				collapsedWidth="0"
				style={{
					overflow: "auto",
					height: "100vh",
					position: "fixed",
					left: 0
				}}
			>
				<div className="labbka-logo">
					<img src={labbkaLogo} alt="Labbka" width="150" height="50" />
				</div>
				<Menu theme="dark" mode="inline">
					<Menu.Item key="1">
						<UserOutlined />
						<NavLink to="/">Domov</NavLink>
					</Menu.Item>
					<Menu.Item key="2">
						<VideoCameraOutlined />
						<NavLink to="/zvieratka-na-adopciu">Na adopciu</NavLink>
					</Menu.Item>
					<Menu.Item key="3">
						<UploadOutlined />
						<NavLink to="/utulky">Utulky</NavLink>
					</Menu.Item>
					<Menu.Item key="4">
						<BarChartOutlined />
						<NavLink to="/pribehy">Pribehy</NavLink>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className="site-layout" style={{ marginLeft: 200 }}>
				<Header className="site-layout-background" style={{ padding: 0 }}>
					<div className="page-name">Nazov page</div>
					<div className="user-info">
						<div className="user-name">
							{loggedUser ? loggedUser.name : "Neprihlaseny"}
						</div>
						<Button onClick={() => handleLogOutUser()}>Odhlasit</Button>
						<Avatar size={32} icon={<UserOutlined />} />
					</div>
				</Header>
				<Content
					style={{
						margin: "24px 16px 0",
						overflow: "initial"
					}}
				>
					<div
						className="site-layout-background content"
						style={{ padding: 24, textAlign: "center" }}
					>
						{children}
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>Labbka company</Footer>
			</Layout>
		</Layout>
	);
};

const mapStateToProps = createStructuredSelector({
	loggedUser: selectLoggedUser
});

const mapDispatchToProps = dispatch => ({
	logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteMenu);
