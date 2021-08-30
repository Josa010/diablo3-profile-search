import React from 'react';
import { classToName } from '../../../../utils/heroName';

export const HeroClassLevel = ({ hero }) => {
	return (
		<div className='hero-name-level'>
			<span> {classToName(hero.classSlug)} </span>
			<span>·</span>
			<span className='text-monospace fw-bold'> {hero.level} </span>
		</div>
	);
};
