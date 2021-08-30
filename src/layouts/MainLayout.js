import React from 'react';
import { FooterBar } from '../components/FooterBar';
import { HeadBar } from '../components/HeadBar';

export const MainLayout = ({ children }) => {
	return (
		<div className='container'>
			<HeadBar />

			{children}

			<FooterBar />
		</div>
	);
};
