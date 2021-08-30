import { types } from '../types/types';

export const ProfileReducer = (state = {}, action) => {
	switch (action.type) {
		case types.setProfileData:
			return {
				...state,
				profileData: action.payload,
			};

		default:
			return state;
	}
};
