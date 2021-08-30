import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { BaseLoading } from '../components/BaseLoading';
import { About } from '../views/About';
import { Home } from '../views/Home';
import { LoadLayout } from './LoadLayout';
import { MainLayout } from './MainLayout';

export const Layout = ({ children }) => {
	const { isLoading } = useSelector((state) => state.ui);

	if (isLoading) {
		return <LoadLayout>{children}</LoadLayout>;
	} else {
		return <MainLayout>{children}</MainLayout>;
	}
};
