import React, { Component } from 'react';
import { getReq } from '../../utils/request';
import AnimalItem from '../../components/animal-item/animal-item.component';
import { connect } from 'react-redux';
import { fetchShelters } from '../../redux/shelters/shelters.actions'
class Animals extends Component {
    state = {
        animals: []
    }
	componentDidMount = async () => {
		console.log('MOUNTED');
		const { fetchSheltersAsync } = this.props
		fetchSheltersAsync()
		console.log('MOUNTED 2');

		// const res = await getReq('/api/v0/shelters');
		// this.setState({
		// 	animals: res.data.animals
		// });
    };
    

	render() {
        // const { animals } = this.state
		return (
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dignissimos laudantium maiores impedit similique ullam ea! Dolorem commodi repellat inventore neque obcaecati praesentium nulla consequatur aut quam. Suscipit, explicabo alias.
				{/* <AnimalItem
                    animals={animals}
                /> */}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchSheltersAsync: () => dispatch(fetchShelters())
})

export default connect(null, mapDispatchToProps)(Animals);
 