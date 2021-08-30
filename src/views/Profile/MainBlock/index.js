import React from 'react';
import { HeroesList } from './HeroesList';
import { PlayerStats } from './PlayerStats';
import { ProgressList } from './ProgressList';
import { TopHeroes } from './TopHeroes';

export const MainBlock = ({ profileData }) => {
	const hasHeroes = () => {
		return profileData.heroes.length > 0;
	};

	const topHeroes = () => {
		return profileData.heroes.slice(0, 3);
	};

	const hasHeroesList = () => {
		return profileData.heroes.length > 3;
	};

	const heroesList = () => {
		return profileData.heroes.slice(3, profileData.heroes.length);
	};

	const statsData = () => {
		const { paragonLevel, kills, timePlayed } = profileData;
		return { paragonLevel, kills, timePlayed };
	};

	return (
		<div className='grid-container'>
			<div className='grid-item item-left'>
				{hasHeroes() && <TopHeroes heroes={topHeroes()} />}
				{hasHeroesList() && <HeroesList heroes={heroesList()} />}
				<ProgressList acts={profileData.progression} />
			</div>
			<div className='grid-item item-right'>
				<PlayerStats stats={statsData()} />
			</div>
		</div>
	);
};
