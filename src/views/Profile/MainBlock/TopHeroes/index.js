import React from 'react';
import { TopHero } from './TopHero';

export const TopHeroes = ({ heroes }) => {
	return (
		<div className='top-heroes'>
			{/* <!-- Título con nuestra fuente Diablo-like --> */}
			<h2 className='my-4 font-diablo'>Top Heroes</h2>
			{/* <!-- 3 columnas, una para cada TopHero --> */}
			<div className='row'>
				{/* <!-- No te olvides de poner el `key` cuando uses v-for --> */}
				{heroes.map((hero) => (
					<div className='col-sm-4 cursor-pointer' key={hero.id}>
						{/* <!-- TopHero con datos como prop --> */}
						<TopHero hero={hero} />
					</div>
				))}
			</div>
		</div>
	);
};
