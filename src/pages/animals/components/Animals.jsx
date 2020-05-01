import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// lodash
import { map, get, size, find } from 'lodash'
// Akcia
import { fetchOneAnimal } from '../../../redux/animals/animals.actions'
import TimeAgo from 'react-timeago'
import slovakStrings from 'react-timeago/lib/language-strings/sk'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

// TODO: spravit sharovanie
// import { FacebookShareButton } from "react-share";

// Antd
import { Avatar, Spin } from 'antd'

// icons
import {
	breedIcon,
	cakeIcon,
	genderIcon,
	sizeIcon,
	likeIcon,
	commentIcon,
	shareIcon,
	locationIcon
} from '../../../utils/icons'

// Utils
import { formatSize, formatGender, formatYears } from '../../../utils/animalTextFormatters'

// LightBox
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app

import { Animated } from 'react-animated-css'

const formatter = buildFormatter(slovakStrings)

class Animals extends Component {
	static propTypes = {
		animals: PropTypes.arrayOf(PropTypes.object),
		fetchOneAnimal: PropTypes.func
	}

	state = {
		photoIndex: 0,
		isOpen: false,
		animalID: null
	}

	render() {
		const { animals, fetchOneAnimal } = this.props
		// const { photoIndex, isOpen } = this.state;

		const handleAdoption = (id) => {
			fetchOneAnimal(id)
		}

		// TODO: presunut do utilky

		// const formatSize = size => {
		// 	if (size === "SMALL") {
		// 		return "Malý";
		// 	}
		// 	if (size === "MEDIUM") {
		// 		return "Stredný";
		// 	}
		// 	return "Veľký";
		// };

		const AnimalItems = () => {
			const { photoIndex, isOpen } = this.state
			// TODO: opravit preblikavanie galerie
			const animalGallery = get(find(animals, (animal) => animal.id === this.state.animalID), 'gallery')

			return animals ? (
				map(animals, (animal) => {
					return (
						<div key={animal.id} className="card-wrapper box-shadow">
							<div className="card-header">
								{/* Utulok info */}
								<Avatar
									className="avatar"
									shape="square"
									size={52}
									src={get(animal, 'userRef.avatar')}
								/>
								<div className="shelter-info">
									<div className="name">
										<strong>{get(animal, 'shelter[0].name')}</strong>
									</div>
								</div>
							</div>
							{/* Ikonky info */}
							<div className="animal-info">
								<div title="plemeno" className="breed background-icon">
									<img src={breedIcon} alt="plemeno" width="20" />
									<span>
										{get(animal, 'breedRef.name') === 'Neznáme plemeno' ? (
											'-'
										) : (
											get(animal, 'breedRef.name')
										)}
									</span>
								</div>
								<div className="age background-icon">
									<img src={cakeIcon} alt="roky" width="20" />
									<span>{formatYears(animal.age)}</span>
								</div>
								<div className="gender background-icon">
									<img src={genderIcon} alt="pohlavie" width="20" />
									<span>{formatGender(get(animal, 'gender'))}</span>
								</div>
								<div className="size background-icon">
									<img src={sizeIcon} alt="velkost" width="20" />
									<span>{formatSize(animal.size)}</span>
								</div>
							</div>
							{/* Zvieratko info */}
							<div className="animal-name">
								<div className="name">{animal.name}</div>
								<div className="addedAt">
									{/* {createdAt} */}
									<TimeAgo date={animal.addedAt} formatter={formatter} />
								</div>
							</div>
							{/* Fotka */}
							<div className="animal-photo">
								<div className="location">
									<img src={locationIcon} width="16" />
									<span>{animal.ownerInfo.address.city}</span>
								</div>
								<img className="animal-covored-photo" src={animal.gallery[0]} alt="fotka zvieratka" />
							</div>
							{/* Description */}
							<div className="card-description">
								{animal.desc ? (
									<p> {animal.desc} </p>
								) : (
									<p
										style={{
											display: 'flex',
											justifyContent: 'center'
										}}
									>
										Žiadny popis
									</p>
								)}
							</div>
							{/* Socialne media + komenty */}
							<div className="card-social">
								<div className="likes-and-comments">
									<div className="likes">
										<img src={likeIcon} width="16" />
										<span>{size(animal.likes)}</span>
									</div>
									<div className="comments">
										<img src={commentIcon} width="16" />
										<span>{size(animal.comments)}</span>
									</div>
								</div>
								<div className="share">
									<img src={shareIcon} width="16" />
									Zdielat
								</div>
								{/* Lightbox galeria */}
								{/* TODO: NEfunguje posuva ine obrazky ako by mal */}
								<div>
									<button
										type="button"
										onClick={() => this.setState({ animalID: get(animal, 'id'), isOpen: true })}
									>
										Open Lightbox
									</button>

									{isOpen && (
										<Lightbox
											mainSrc={animalGallery && animalGallery[photoIndex]}
											nextSrc={animalGallery[(photoIndex + 1) % animalGallery.length]}
											prevSrc={
												animalGallery[
													(photoIndex + animalGallery.length - 1) % animalGallery.length
												]
											}
											onCloseRequest={() => this.setState({ isOpen: false })}
											onMovePrevRequest={() =>
												this.setState({
													photoIndex:
														(photoIndex + animalGallery.length - 1) % animalGallery.length
												})}
											onMoveNextRequest={() =>
												this.setState({
													photoIndex: (photoIndex + 1) % animalGallery.length
												})}
										/>
									)}
								</div>
							</div>
							{/* Presmerovanie */}
							<div className="card-button">
								<Link to={'/detail-zvieratka/' + animal.id}>
									<button onClick={() => handleAdoption(animal.id)}>
										<span>Viac Informacii</span>
									</button>
								</Link>
							</div>
						</div>
					)
				})
			) : (
				<Spin />
			)
		}

		return (
			<Animated
				animationIn="fadeInRight"
				animationOut="fadeOutLeft"
				animationInDuration={1000}
				animationOutDuration={1000}
				isVisible={true}
			>
				<div className="animals-wrapper">
					<AnimalItems />
					
				</div>
			</Animated>
		)
	}
}
const mapDispatchToProps = (dispatch) => ({
	fetchOneAnimal: (id) => dispatch(fetchOneAnimal(id))
})

export default connect(null, mapDispatchToProps)(Animals)
