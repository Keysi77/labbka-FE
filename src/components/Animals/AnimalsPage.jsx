import React, { Component } from 'react';
import Animals from './components/Animals';
import { getReq } from '../../utils/request';

export default class AnimalsPage extends Component {
    state = {
        animals: []
    }
	componentDidMount = async () => {
		console.log('MOUNTED');
		const res = await getReq('/api/v0/shelters');
		console.log('MOUNTED', res.data);
		// this.setState({
		// 	animals: res.data.animals
		// });
    };
    

	render() {
        // const { animals } = this.state
		return (
			<div>
				{/* <Animals
                    animals={animals}
                /> */}
			</div>
		);
	}
}
