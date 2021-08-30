import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Leaf from '../../../../assets/img/leaf.png';
import { formatNumber } from '../../../../utils/formatNumber';

export const TopHero = ({ hero }) => {
	const heroClass = () => {
		const gender = hero.gender === 0 ? 'male' : 'female';
		return `hero-${hero.classSlug} ${gender}`;
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
		<div className='hero-portrait-wrapper mb-5 mb-sm-0' onClick={goToHero}>
			{/* <!-- Avatar --> */}
			<div className='bg-secondary d-flex justify-content-center p-3 p-sm-0'>
				{/* <!-- Imagen de fondo, según la clase y el género --> */}
				<div className={heroClass()}></div>
			</div>
			<div className='p-2 bg-dark'>
				{/* <!-- Nombre héroe --> */}
				{/* <!-- Si es hardcore, pintamos el fondo rojo --> */}
				<h5
					className={`text-truncate m-0 text-center title-name font-diablo ${
						hero.hardcore && 'bg-danger'
					}`}
				>
					{hero.name}
					{/* // <!-- Si es condicional, pintamos la hoja verde --> */}
					{hero.seasonal && (
						<img src={Leaf} width='12px' className='' alt='leaf' />
					)}
				</h5>
				<div className='d-flex justify-content-between border-top border-secondary pt-2 align-items-center mt-2'>
					<small className='elite-kills'>
						{/* <!-- Jefes (Élites) asesinados --> */}
						<span className='text-monospace'>
							{formatNumber(hero.kills.elites)}
						</span>{' '}
						Elite kills
					</small>
					{/* <!-- Nivel. De color rojo si el héroe está muerto --> */}
					<small
						className={`level-circle  ${
							hero.dead && 'text-danger'
						}`}
					>
						{' '}
						{hero.level}{' '}
					</small>
				</div>
			</div>
		</div>
	);
};
