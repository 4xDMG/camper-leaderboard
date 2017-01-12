import React from 'react';

const CamperListItem =(currentCamper) => {
	console.log(currentCamper);
	return (
		<tr>
			<td></td>
			<td><img src={ currentCamper.img } /> {currentCamper.username}</td>
			<td>{currentCamper.recent}</td>
			<td>{currentCamper.alltime}</td>
		</tr>
	)
}

export default CamperListItem;