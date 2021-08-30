import React from 'react';
import { FootLinks } from './FootLinks';
import { MadeByFoot } from './MadeByFoot';
import { PoweredByFoot } from './PoweredByFoot';

export const FooterBar = () => {
	const icons = [
		{
			classes: ['fab', 'react'],
			color: '#61dafb',
			href: 'https://es.reactjs.org/',
		},
		{
			classes: ['fab', 'bootstrap'],
			color: '#7952b3',
			href: 'https://react-bootstrap.netlify.app/',
		},
		{
			classes: ['fab', 'battle-net'],
			href: 'https://develop.battle.net/documentation/diablo-3/community-apis',
		},
		{
			classes: ['fab', 'github'],
			color: '#e4e4e4',
			href: 'https://github.com/baumannzone',
		},
		{
			classes: ['fab', 'font-awesome'],
			color: '#0e95ff',
			href: 'https://fontawesome.com/',
		},
	];

	return (
		<footer className='footer-bar mt-5'>
			<PoweredByFoot icons={icons} />

			<hr className='my-5' />

			<div className='row'>
				<div className='col-sm-6 mb-sm-0 mb-5'>
					<FootLinks />
				</div>
				<div className='col-sm-6'>
					<MadeByFoot />
				</div>
			</div>
		</footer>
	);
};
