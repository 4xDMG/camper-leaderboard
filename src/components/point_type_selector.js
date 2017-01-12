import React, {Component} from 'react';
import App from '../App.js'

class PointTypeSelector extends Component {
	constructor(props) {
		super(props);

		this.state = { pointType: '' }
	}

	handleChange(points) {
		this.setState({pointType: points});
		console.log(this.state);
		return this.state;
	}

	render() {
		return (
			<thead>

			<tr>
				<th>Rank</th>
				<th>Camper</th>
				<th ref='recent' className="active" onClick={() => this.handleChange('recent')}>Last 30 days</th>
				<th ref='alltime' onClick={() => this.handleChange('allTime')}>All time</th>
			</tr>

			</thead>
		)
	}
}

export default PointTypeSelector;