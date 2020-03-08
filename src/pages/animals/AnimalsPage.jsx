import React, { Component } from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchAnimals } from "../../redux/animals/animals.actions";
import { selectAllAnimals } from "../../redux/animals/animals.selectors";
// Components
import AnimalItem from "../../components/animal-item/AnimalItem";

// TODO: prerobit na funcional
class AnimalsPage extends Component {
	static propTypes = {
		animals: PropTypes.array,
		fetchAnimals: PropTypes.func
	};

	componentDidMount = async () => {
		const { fetchAnimals } = this.props;
		fetchAnimals();
	};
	render() {
		return <AnimalItem animals={this.props.animals} />;
	}
}
const mapDispatchToProps = dispatch => ({
	fetchAnimals: () => dispatch(fetchAnimals())
});

const mapStateToProps = createStructuredSelector({
	animals: selectAllAnimals
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsPage);
