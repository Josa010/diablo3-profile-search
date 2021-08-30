import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.setToken:
			return {
				...state,
				accessToken: action.payload,
			};

		default:
			return state;
	}
};
