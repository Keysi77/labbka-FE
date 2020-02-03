import React from 'react'
import PropTypes from 'prop-types'
// Material
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Grid from '@material-ui/core/Grid'
// Request
import { getReq } from '../../utils/request'
import { API_PATHS } from '../../enums/apiPaths'

import './animal-item.styles.sass'

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
}))

export function AnimalItem(props) {
	AnimalItem.propTypes = {
		animals: PropTypes.arrayOf(PropTypes.object).isRequired,
	}

	const classes = useStyles()
	const { animals } = props

	const handleGetAnimal = async (id) => {
		try {
			const { data } = await getReq(API_PATHS.GET_ONE_ANIMAL(id))
			return data
		} catch (e) {
			return Promise.reject(e)
		}
	}

	const AnimalItems = () => (
		animals ?
			animals.map((animal) => (
				<Grid key={animal.id} item spacing={2}>
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
								{animal.desc && animal.desc.length > 150 ? animal.desc.slice(0, 150) + '...' : animal.desc ? animal.desc : <div className="no-content">Ziadny popis</div>}
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
						<Button variant="contained" color="primary" className={classes.margin} onClick={() => handleGetAnimal(animal.id)}>
							Adoptovat
							</Button>
					</Card>
				</Grid>
			)) : (<p> NO DATA </p>)
	)

	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="center" spacing={3}>
					<AnimalItems />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default AnimalItem
