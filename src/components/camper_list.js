import React from 'react';
import PointTypeSelector from './point_type_selector';

const CamperList = (props) => {
	//console.log(props.campers);

	return (
		<table>
			<PointTypeSelector />
		</table>
	)
}

export default CamperList;