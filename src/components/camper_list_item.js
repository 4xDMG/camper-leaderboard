import React from 'react';

const CamperListItem =(props) => {
	let rank = props.rank;
	let username = props.camper.username;
	let imgUrl = props.camper.img;
	let recent = props.camper.recent;
	let alltime = props.camper.alltime;
	return (
		<tr>
			<td className='points'>{rank}</td>
			<td><img src={ imgUrl } /> {username}</td>
			<td className='points'>{recent}</td>
			<td className='points'>{alltime}</td>
		</tr>
	)
}

export default CamperListItem;