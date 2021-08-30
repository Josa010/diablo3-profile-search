import { getToken } from '../api/oauth';
import { types } from '../types/types';
import { setLoading } from './ui';

export const startGetToken = () => {
	return async (dispatch) => {
		try {
			dispatch(setLoading(true));
			const { data } = await getToken();
			dispatch(setToken(data.access_token));
			dispatch(setLoading(false));
		} catch (error) {
			dispatch(setToken(null));
			dispatch(setLoading(false));
		}
	};
};

export const setToken = (access_token) => {
	return {
		type: types.setToken,
		payload: access_token,
	};
};
