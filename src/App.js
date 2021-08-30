import React, { useEffect } from 'react';

import { AppRouter } from './router/AppRouter';
import { useDispatch } from 'react-redux';

import { startGetToken } from './actions/auth';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(startGetToken());
	}, [dispatch]);

	return (
		<div id='app'>
			<AppRouter />
		</div>
	);
};
