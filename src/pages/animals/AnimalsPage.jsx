import React, { useEffect } from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchAnimals } from "../../redux/animals/animals.actions";
import { selectAllAnimals } from "../../redux/animals/animals.selectors";
// Components
import AnimalItem from "../../components/animal-item/AnimalItem";

const AnimalsPage = props => {
	AnimalsPage.propTypes = {
		animals: PropTypes.array,
		fetchAnimals: PropTypes.func
	};
	useEffect(() => {
		const { fetchAnimals } = props;
		fetchAnimals();
	}, []);

	return <AnimalItem animals={props.animals} />;
};
const mapDispatchToProps = dispatch => ({
	fetchAnimals: () => dispatch(fetchAnimals())
});

const mapStateToProps = createStructuredSelector({
	animals: selectAllAnimals
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsPage);
