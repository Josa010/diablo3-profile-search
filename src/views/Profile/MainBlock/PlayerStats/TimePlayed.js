import React from 'react';
import { TimePlayedHero } from './TimePlayedHero';

export const TimePlayed = ({ timePlayed }) => {
	return (
		<div className='time-played mt-3'>
			<hr className='bg-white mt-5' />
			<h2 className='font-diablo my-4'>Time Played</h2>
			<div className='bg-dark p-3'>
				{timePlayed.map((hero) => (
					<div key={hero.classSlug}>
						<TimePlayedHero heroTime={hero} />
					</div>
				))}
			</div>
		</div>
	);
};
