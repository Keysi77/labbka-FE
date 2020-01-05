import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchAnimals } from '../../redux/animals/animals.actions';
import { selectAllAnimals } from '../../redux/animals/animals.selectors';

import AnimalItem from '../../components/animal-item/animal-item.component';

class AnimalsPage extends Component {
	componentDidMount = async () => {
		const { fetchAnimals } = this.props;
		fetchAnimals();
	};

	render() {
		return (
			<div>
				Animal component PAGE
				<AnimalItem animals={this.props.animals} />
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	fetchAnimals: () => dispatch(fetchAnimals())
});

const mapStateToProps = createStructuredSelector({
	animals: selectAllAnimals
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsPage);
