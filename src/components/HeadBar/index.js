import React from 'react';
import { Navbar } from 'react-bootstrap';

import D3 from '../../assets/img/diablo-iii.svg'; // with import

export const HeadBar = () => {
	return (
		<div className='header-bar'>
			<div className='navigation-bar'>
				<Navbar expand='lg' bg='dark' variant='dark'>
					<Navbar.Brand href='/'>
						<img src={D3} alt='D3' width='30' />
						<span className='font-diablo ml-2'>D3PF</span>
					</Navbar.Brand>
				</Navbar>
			</div>
		</div>
	);
};
