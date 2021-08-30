import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { setProfileData } from '../../actions/profile';
import { getApiAccount } from '../../api/search';
import { BaseLoading } from '../../components/BaseLoading';
import { ArtisansBlock } from './ArtisansBlock';
import { MainBlock } from './MainBlock';

export const ProfileView = () => {
	const { region, battleTag: account } = useParams();
	const { accessToken } = useSelector((state) => state.auth);
	const { error } = useSelector((state) => state.ui);
	const dispatch = useDispatch();
	const history = useHistory();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getProfileData = async () => {
			try {
				setLoading(true);
				const { data } = await getApiAccount({
					region,
					account,
					accessToken,
				});
				const profileData = data;
				dispatch(setProfileData(profileData));
				setLoading(false);
			} catch (error) {
				const errObj = {
					routeParams: { region, account },
					message: error.message,
				};
				if (error.response) {
					errObj.data = error.response.data;
					errObj.status = error.response.status;
				}

				setLoading(false);
				history.push('/error', errObj);
			}
		};

		accessToken && getProfileData();
	}, [accessToken, region, account, history, dispatch]);

	const { profileData } = useSelector((state) => state.profile);

	if (error) {
		history.push('/error', error);
	}

	if (loading) {
		return <BaseLoading />;
	}

	const artisansData = () => {
		return {
			blacksmith: profileData.blacksmith,
			blacksmithHardcore: profileData.blacksmithHardcore,
			jeweler: profileData.jeweler,
			jewelerHardcore: profileData.jewelerHardcore,
			mystic: profileData.mystic,
			mysticHardcore: profileData.mysticHardcore,
		};
	};

	return (
		<div>
			{profileData && (
				<>
					<MainBlock profileData={profileData} />
					<ArtisansBlock artisansData={artisansData()} />
				</>
			)}
		</div>
	);
};
