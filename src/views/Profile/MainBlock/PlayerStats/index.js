import React from 'react';
import { classToName } from '../../../../utils/heroName';
import { SingleStat } from './SingleStat';
import { TimePlayed } from './TimePlayed';

export const PlayerStats = ({ stats }) => {
	const timePlayed = () => {
		return Object.keys(stats.timePlayed)
			.sort()
			.map((hero) => {
				return {
					hero: classToName(hero),
					time: stats.timePlayed[hero],
					classSlug: hero,
				};
			});
	};

	return (
		<div className='multi-stats ps-lg-4'>
			<hr className='bg-white mt-5 d-lg-none' />
			<h2 className='font-diablo my-4'>Stats</h2>
			<div className='stats d-flex flex-column bg-dark p-3'>
				<SingleStat
					className='mb-3'
					icoName='skull'
					icoColor='#9E9E9E'
					info={{
						value: stats.kills.monsters,
						text: 'Lifetime Kills',
					}}
				/>

				<SingleStat
					className='mb-3'
					icoName='crown'
					icoColor='#ffc107'
					info={{ value: stats.kills.elites, text: 'Elite Kills' }}
				/>

				<SingleStat
					icoName='dungeon'
					icoColor='#795548'
					info={{ value: stats.paragonLevel, text: 'Paragon Level' }}
				/>
			</div>

			<TimePlayed timePlayed={timePlayed()} />
		</div>
	);
};
