import React, { Component } from 'react'
import PropTypes from 'prop-types'
// Redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchAnimals } from '../../redux/animals/animals.actions'
import { selectAllAnimals } from '../../redux/animals/animals.selectors'
// Components
import AnimalItem from '../../components/animal-item/animal-item.component'
// Styles
import './animals.styles.sass'

class AnimalsPage extends Component {
	static propTypes = {
		prop: PropTypes,
		animals: PropTypes.array,
		fetchAnimals: PropTypes.shape()
	}

	componentDidMount = async () => {
		const { fetchAnimals } = this.props
		fetchAnimals()
	}
	render() {
		return (
			<div className="animal-wrapper">
				<AnimalItem animals={this.props.animals} />
			</div>
		)
	}
}
const mapDispatchToProps = (dispatch) => ({
	fetchAnimals: () => dispatch(fetchAnimals())
})

const mapStateToProps = createStructuredSelector({
	animals: selectAllAnimals
})

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsPage)
