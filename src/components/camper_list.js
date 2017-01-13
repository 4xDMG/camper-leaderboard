import React from 'react';
import CamperListItem from './camper_list_item';

const CamperList = (props) => {
	const camperList = props.camperList.map((camper, count) => {
		count++;
		return (
				<CamperListItem 
					camper={camper}
					key={count}
					rank={count}
				/>

		)
	});

	return (
		<tbody>
			{camperList}
		</tbody>
	)

}

export default CamperList;