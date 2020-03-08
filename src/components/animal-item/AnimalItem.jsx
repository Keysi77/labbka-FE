import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
// lodash
import { map } from "lodash";
//
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
// TODO: nejdu custom styly
import "./AnimalItem.sass";
const { Meta } = Card;

export function AnimalItem(props) {
	AnimalItem.propTypes = {
		animals: PropTypes.arrayOf(PropTypes.object).isRequired,
		fetchOneAnimal: PropTypes.func,
		logoutUser: PropTypes.func
	};

	const { animals } = props;

	// const handleClick = id => {
	// 	const { fetchOneAnimal } = props;
	// 	fetchOneAnimal(id);
	// };

	// const AnimalItems = () =>
	// 	animals ? (
	// 		map(animals, animal => (
	// 			<Grid key={animal.id} item>
	// 				<Card className={classes.card}>
	// 					<CardHeader
	// 						avatar={
	// 							<Avatar aria-label="recipe" className={classes.avatar}>
	// 								PF
	// 							</Avatar>
	// 						}
	// 						action={
	// 							<IconButton aria-label="settings">
	// 								<MoreVertIcon />
	// 							</IconButton>
	// 						}
	// 						title={animal.name}
	// 						subheader={animal.userRef.name}
	// 					/>
	// 					<CardMedia
	// 						className={classes.media}
	// 						image={animal.gallery[0]}
	// 						title="Paella dish"
	// 					/>
	// 					<CardContent>
	// 						<Typography variant="body2" color="textSecondary" component="p">
	// 							{animal.desc && animal.desc.length > 150 ? (
	// 								animal.desc.slice(0, 150) + "..."
	// 							) : animal.desc ? (
	// 								animal.desc
	// 							) : (
	// 								<span className="no-content">Ziadny popis</span>
	// 							)}
	// 						</Typography>
	// 					</CardContent>
	// 					<CardActions disableSpacing>
	// 						<IconButton aria-label="add to favorites">
	// 							<FavoriteIcon />
	// 						</IconButton>
	// 						<IconButton aria-label="share">
	// 							<ShareIcon />
	// 						</IconButton>
	// 					</CardActions>
	// 					<Link to={"/detail-zvieratka/" + animal.id}>
	// 						<Button
	// 							variant="contained"
	// 							color="primary"
	// 							className={classes.margin}
	// 							onClick={() => handleClick(animal.id)}
	// 						>
	// 							Adoptovat
	// 						</Button>
	// 					</Link>
	// 				</Card>
	// 			</Grid>
	// 		))
	// 	) : (
	// 		<CircularProgress />
	// 	);

	const AnimalItems = () =>
		animals ? (
			map(animals, animal => (
				<Card
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
