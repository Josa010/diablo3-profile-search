import React from 'react';

export const ProgressItem = ({ act }) => {
	const acts = {
		act1: 'I',
		act2: 'II',
		act3: 'III',
		act4: 'IV',
		act5: 'V',
	};

	const fullActName = () => {
		return `Act ${acts[act.actNum]}`;
	};
	const actClass = () => {
		const status = act.value ? 'done' : 'pending';
		return `${act.actNum} ${status}`;
	};
	const actTitle = () => {
		return act.value ? 'Act completed! 💃' : 'Act uncompleted 🙈';
	};

	return (
		<div className='d-flex flex-column' title={actTitle()}>
			<div className='boss-img pt-2'>
				<div className={`act ${actClass()}`}></div>
			</div>
			<p className='d-block text-center m-0 lead fw-bold'>
				{fullActName()}
			</p>
		</div>
	);
};
