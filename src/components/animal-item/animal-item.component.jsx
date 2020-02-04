import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
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
// Akcia
import { fetchOneAnimal } from '../../redux/animals/animals.actions'

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
		fetchOneAnimal: PropTypes.func
	}

	const classes = useStyles()
	const { animals } = props

	const handleClick = (id) => {
		const { fetchOneAnimal } = props
		fetchOneAnimal(id)
	}

	const AnimalItems = () => (
		animals ?
			animals.map((animal) => (
				<Grid key={animal.id} item>
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
								{animal.desc && animal.desc.length > 150 ? animal.desc.slice(0, 150) + '...' : animal.desc ? animal.desc : <span className="no-content">Ziadny popis</span>}
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
						<Link to={'/detail-zvieratka/' + animal.id}>
							<Button variant="contained" color="primary" className={classes.margin} onClick={() => handleClick(animal.id)}>
								Adoptovat
							</Button>
						</Link>
					</Card>
				</Grid>
			)) : (
				<div>
					NO DATA
				</div>
			)
	)

	return (
		<Grid container className={classes.root}>
			<Grid item xs={12}>
				<Grid container justify="center" spacing={3}>
					<AnimalItems />
				</Grid>
			</Grid>
		</Grid>
	)
}

const mapDispatchToProps = (dispatch) => ({
	fetchOneAnimal: (id) => dispatch(fetchOneAnimal(id))
})

export default connect(null, mapDispatchToProps)(AnimalItem)
