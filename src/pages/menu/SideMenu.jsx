import React from "react";
import { NavLink } from "react-router-dom";

import { Layout, Menu, Avatar } from "antd";
import {
	BarChartOutlined,
	UserOutlined,
	UploadOutlined,
	VideoCameraOutlined
} from "@ant-design/icons";

import "./SideMenu.sass";

const { Header, Content, Footer, Sider } = Layout;

export default function SideMenu({ children }) {
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
				<div className="logo" />
				<Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
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
						Meno Priezvisko Odhlasit
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
						className="site-layout-background"
						style={{ padding: 24, textAlign: "center" }}
					>
						{children}
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>Labbka company</Footer>
			</Layout>
		</Layout>
	);
}
