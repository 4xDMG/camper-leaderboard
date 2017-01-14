import React, {Component} from 'react';

class PointTypeSelector extends Component {
	constructor(props) {
		super(props);

		this.state = { active: 'recent' }
	}

	handleChange(points, key) {
		if (this.refs[key].classList.contains('active')) {
			return 0;
		} else {
			let removeActive = document.getElementsByClassName('active');
			while (removeActive.length) {
				removeActive[0].classList.remove('active');
			}
			this.props.getData(points);
			this.refs[key].classList.add('active');
		}	
	}

	render() {
		return (
			<thead>

			<tr>
				<th className='points'>Rank</th>
				<th className='user'>Camper</th>
				<th ref='recent' className="active points selector" onClick={() => this.handleChange(this.props.recent, 'recent')}>Last 30 days</th>
				<th ref='alltime' className='points selector' onClick={() => this.handleChange(this.props.alltime, 'alltime')}>All time</th>
			</tr>

			</thead>
		)
	}
}

export default PointTypeSelector;