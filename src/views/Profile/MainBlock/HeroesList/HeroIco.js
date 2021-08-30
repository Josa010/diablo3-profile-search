import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Leaf from '../../../../assets/img/leaf.png';

export const HeroIco = ({ hero }) => {
	const heroClassImg = () => {
		const gender = hero.gender === 1 ? 'female' : 'male';
		const hardcore = hero.hardcore ? 'border-danger' : '';
		return `hero-${hero.classSlug} ${gender} ${hardcore}`;
	};

	const history = useHistory();
	const { region, battleTag } = useParams();
	const goToHero = () => {
		// Sacar los datos de la URL
		// Navegar a la ruta "Hero"
		history.push({
			pathname: `/region/${region}/profile/${battleTag}/hero/${hero.id}`,
			state: { region, battleTag, heroId: hero.id },
		});
	};

	return (
		<div
			className='hero-ico d-flex align-items-center cursor-pointer'
			onClick={goToHero}
		>
			<span className={`hero-image border ${heroClassImg()}`}></span>
			<span
				className={`hero-name ms-2 fw-bold ${
					hero.hardcore && 'text-danger'
				}`}
			>
				{hero.name}
			</span>
			{hero.seasonal && (
				<img
					src={Leaf}
					width='12px'
					className='ml-2'
					alt='seasonal_leaf'
				/>
			)}
		</div>
	);
};
