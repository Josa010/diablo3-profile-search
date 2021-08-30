import { types } from '../types/types';

export const setLoading = (isLoading) => ({
	type: types.setLoading,
	payload: isLoading,
});

export const setError = (err) => ({
	type: types.setError,
	payload: err,
});

export const removeError = () => ({
	type: types.removeError,
});
