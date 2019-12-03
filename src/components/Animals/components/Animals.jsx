import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	card: {
		maxWidth: 345
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: red[500]
	}
}));

export function Animals(props) {
	const classes = useStyles();

	console.log('ANIMALS', props);

	// Sposob cez HOOKy
	// const [ animals, setAnimals ] = useState([]);
	// useEffect(() => {
	// 	async function fetchData() {
	// 		const res = await getReq('api/v0/animals');
	// 		console.log('res', res);
	// 	}
	//   fetchData();
	//   // [] aby boli data len raz rendernute a nebol infinity loop
	// }, []);

	Animals = () =>
		props.animals &&
		props.animals.map((animal) => (
			<Grid key={animal.id} item spacing={3}>
				<Card className={classes.card}>
					<CardHeader
						avatar={
							<Avatar aria-label="recipe" className={classes.avatar}>
								PF
							</Avatar>
						}
						action={
							<IconButton aria-label="settings">
								<MoreVertIcon />
							</IconButton>
						}
						title={animal.name}
						subheader={animal.userRef.name}
					/>
					<CardMedia className={classes.media} image={animal.gallery[0]} title="Paella dish" />
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							{animal.desc}
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<IconButton aria-label="add to favorites">
							<FavoriteIcon />
						</IconButton>
						<IconButton aria-label="share">
							<ShareIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Grid>
		));

	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="center" spacing={3}>
					<Animals />
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Animals;
