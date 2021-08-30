import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { LoadLayout } from '../layouts/LoadLayout';
import { MainLayout } from '../layouts/MainLayout';

import { BaseLoading } from '../components/BaseLoading';

import { Home } from '../views/Home';
import { About } from '../views/About';
import { ProfileView } from '../views/Profile';
import { HeroView } from '../views/Hero';
import { ErrorView } from '../views/Error';

export const AppRouter = () => {
	const { isLoading } = useSelector((state) => state.ui);

	return (
		<Router>
			<div>
				{isLoading ? (
					<LoadLayout>
						<BaseLoading />
					</LoadLayout>
				) : (
					<MainLayout>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/about' component={About} />
							<Route exact path='/error' component={ErrorView} />
							<Route
								exact
								path='/region/:region/profile/:battleTag'
								component={ProfileView}
							/>
							<Route
								exact
								path='/region/:region/profile/:battleTag/hero/:heroId'
								component={HeroView}
							/>
						</Switch>
					</MainLayout>
				)}
			</div>
		</Router>
	);
};
