import React from 'react';
import { HomeForm } from './HomeForm';
import { HomeTitle } from './HomeTitle';

export const Home = () => {
	return (
		<div className='home'>
			<HomeTitle />
			<HomeForm />
		</div>
	);
};
