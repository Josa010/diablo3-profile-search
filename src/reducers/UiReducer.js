import { types } from '../types/types';

const initialState = {
	isLoading: false,
	error: null,
};

export const UiReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.setLoading:
			return {
				...state,
				isLoading: action.payload,
			};

		case types.setError:
			return {
				...state,
				error: action.payload,
			};

		case types.removeError:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};
