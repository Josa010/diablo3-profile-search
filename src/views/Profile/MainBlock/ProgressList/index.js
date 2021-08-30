import React from 'react';
import { ProgressItem } from './ProgressItem';

export const ProgressList = ({ acts }) => {
	const sortedActs = () => {
		return Object.keys(acts)
			.sort()
			.reduce((a, c) => {
				a[c] = acts[c];
				return a;
			}, {});
	};

	const sortedActs2 = Object.entries(sortedActs());

	return (
		<div className='progression-bosses pt-4 mt-5 border-top'>
			<h2 className='font-diablo mb-4'>Progression</h2>
			<div className='row'>
				{sortedActs2.map((val, key) => (
					<div key={key} className='col-12 col-md-2'>
						<div className='bg-dark rounded mb-2'>
							<ProgressItem
								act={{ actNum: val[0], value: val[1] }}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
