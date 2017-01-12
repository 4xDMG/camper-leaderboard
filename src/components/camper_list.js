import React from 'react';
import PointTypeSelector from './point_type_selector';
import CamperListItem from './camper_list_item';

const CamperList = (props) => {
	console.log(props.camperList[0])

	const camperList = props.camperList.map((username) => {
		return (
			<CamperListItem 
				currentCamper = {props.camperList}
			/>
		)
	});

	return (
		<table>
			<PointTypeSelector />

		</table>
	)
}

export default CamperList;