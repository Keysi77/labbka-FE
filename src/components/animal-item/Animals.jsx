import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";
// lodash
import { map, get } from "lodash";
// Akcia
import { fetchOneAnimal } from "../../redux/animals/animals.actions";
import moment from "moment";
// Antd
import { Card, Avatar, Spin, Button, Typography, Row, Col } from "antd";

import {
	EditOutlined,
	EllipsisOutlined,
	SettingOutlined,
	UserOutlined
} from "@ant-design/icons";

import "./Animals.sass";

const { Meta } = Card;
const { Title, Text } = Typography;

export function Animals({ animals, fetchOneAnimal }) {
	Animals.propTypes = {
		animals: PropTypes.arrayOf(PropTypes.object).isRequired,
		fetchOneAnimal: PropTypes.func
	};

	const handleAdoption = id => {
		fetchOneAnimal(id);
	};

	const AnimalItems = () => {
		return animals ? (
			map(animals, animal => {
				// <Card
				// 	key={animal.id}
				// 	style={{ width: 300 }}
				// 	className="animal-items"
				// 	cover={<img alt="example" src={animal.gallery[0]} />}
				// 	actions={[
				// 		<SettingOutlined key="setting" />,
				// 		<EditOutlined key="edit" />,
				// 		<EllipsisOutlined key="ellipsis" />
				// 	]}
				// >
				// 	<div className="gg">sfsdf</div>
				// 	<Meta
				// 		avatar={
				// 			<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
				// 		}
				// 		title={animal.name}
				// 		description="This is the description"
				// 	/>
				// 	<Link to={"/detail-zvieratka/" + animal.id}>
				// 		<Button
				// 			variant="contained"
				// 			color="primary"
				// 			onClick={() => handleAdoption(animal.id)}
				// 		>
				// 			Viac informacii
				// 		</Button>
				// 	</Link>
				// </Card>
				// TODO: dorobit format
				const createdAt = moment(animal.addedAt).format("YYYY/DD/MM");
				console.log("animal", animal);
				return (
					<div key={animal.id} className="card-wrapper">
						<div className="card-header">
							<Avatar
								className="avatar"
								shape="square"
								size={52}
								src={get(animal, "userRef.avatar")}
							/>
							<div className="shelter-info">
								<div className="name">{get(animal, "shelter[0].name")}</div>
							</div>
						</div>
						<div className="animal-info">krizenec 5 rokov samcek stredny</div>
						<div className="animal-photo">
							<img src={animal.gallery[0]} alt="fotka zvieratka" />
						</div>
						<div className="animal-name">
							<Title level={4}>{animal.name}</Title>
						</div>
						<div className="card-description">
							<Text>{animal.desc}</Text>
						</div>
						<div className="card-social">likes koments</div>
						<div className="card-button">
							<Link to={"/detail-zvieratka/" + animal.id}>
								<button onClick={() => handleAdoption(animal.id)}>
									Viac Informacii
								</button>
							</Link>
						</div>
					</div>
				);
			})
		) : (
			<Spin />
		);
	};

	return (
		<div className="animals-wrapper">
			<AnimalItems />
		</div>
	);
}
const mapDispatchToProps = dispatch => ({
	fetchOneAnimal: id => dispatch(fetchOneAnimal(id))
});

export default connect(null, mapDispatchToProps)(Animals);
