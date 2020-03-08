import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
// lodash
import { map } from "lodash";
// Akcia
import { fetchOneAnimal } from "../../redux/animals/animals.actions";
import { logoutUser } from "../../redux/auth/auth.actions";
// Antd
import { Card, Avatar, Spin } from "antd";
import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined
} from "@ant-design/icons";

import "./AnimalItem.sass";
const { Meta } = Card;

export function AnimalItem(props) {
	AnimalItem.propTypes = {
		animals: PropTypes.arrayOf(PropTypes.object).isRequired,
		fetchOneAnimal: PropTypes.func,
		logoutUser: PropTypes.func
	};

	const { animals } = props;

	const AnimalItems = () =>
		animals ? (
			map(animals, animal => (
				<Card
					key={animal.id}
					style={{ width: 300 }}
					className="animal-items"
					cover={<img alt="example" src={animal.gallery[0]} />}
					actions={[
						<SettingOutlined key="setting" />,
						<EditOutlined key="edit" />,
						<EllipsisOutlined key="ellipsis" />
					]}
				>
					<Meta
						avatar={
							<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
						}
						title={animal.name}
						description="This is the description"
					/>
				</Card>
			))
		) : (
			<Spin />
		);

	return (
		<div className="animals-wrapper">
			<AnimalItems />
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	fetchOneAnimal: id => dispatch(fetchOneAnimal(id)),
	logoutUser: () => dispatch(logoutUser())
});

export default connect(null, mapDispatchToProps)(AnimalItem);
