import React from 'react';
import { ArtisanItem } from './ArtisanItem';

export const ArtisansBlock = ({ artisansData }) => {
	const artisansInfo = () => {
		return [
			{
				name: 'blacksmith',
				icon: 'hammer',
				emoji: '⚒',
				color: '#ffb74d',
				normal: artisansData.blacksmith,
				hardcore: artisansData.blacksmithHardcore,
			},
			{
				name: 'jeweler',
				icon: 'gem',
				emoji: '💎',
				color: '#4dd0e1',
				normal: artisansData.jeweler,
				hardcore: artisansData.jewelerHardcore,
			},
			{
				name: 'mystic',
				icon: 'hat-wizard',
				emoji: '🔮',
				color: '#ba68c8',
				normal: artisansData.mystic,
				hardcore: artisansData.mysticHardcore,
			},
		];
	};

	return (
		<div className='artisan-list'>
			<hr className='bg-light my-5' />
			<h3 className='font-diablo mb-4'>Artisans</h3>
			<div className='row'>
				{artisansInfo().map((artisan) => (
					<div className='col col-lg-4' key={artisan.name}>
						<ArtisanItem artisan={artisan} />
					</div>
				))}
			</div>
		</div>
	);
};
