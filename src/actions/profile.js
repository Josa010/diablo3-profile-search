import { types } from '../types/types';

export const setProfileData = (profileData) => {
	return {
		type: types.setProfileData,
		payload: profileData,
	};
};
