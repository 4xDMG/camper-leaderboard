import React, {Component} from 'react';

class PointTypeSelector extends Component {
	constructor(props) {
		super(props);

		this.state = { pointType: '' }
	}

	handleChange(pointType) {
		this.setState({pointType});
		this.props.onPointTypeChange(pointType);
	}

	render() {
		return (
			<tbody>

			<tr>
				<th>Rank</th>
				<th>Camper</th>
				<th ref='recent' className="active">Last 30 days</th>
				<th ref='alltime'>All time</th>
			</tr>

			</tbody>
		)
	}
}

export default PointTypeSelector;