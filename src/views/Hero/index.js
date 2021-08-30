import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { setError } from '../../actions/ui';
import { getApiDetailedHeroItems, getApiHero } from '../../api/search';
import { BaseLoading } from '../../components/BaseLoading';
import { HeroAttributes } from './HeroAttributes';
import { HeroDetailHeader } from './HeroDetailHeader';
import { HeroItems } from './HeroItems';
import { HeroSkills } from './HeroSkills';

export const HeroView = () => {
	const { region, battleTag: account, heroId } = useParams();
	const { accessToken } = useSelector((state) => state.auth);

	const [isLoadingHero, setIsLoadingHero] = useState(false);
	const [isLoadingItems, setIsLoadingItems] = useState(false);
	const [hero, setHero] = useState();
	const [items, setItems] = useState();

	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		const getHeroData = async () => {
			setIsLoadingHero(true);
			try {
				const { data } = await getApiHero({
					region,
					account,
					heroId,
					accessToken,
				});
				setHero(data);
				setIsLoadingHero(false);
			} catch (err) {
				setHero(null);
				const errObj = {
					routeParams: { region, account, heroId },
					message: err.message,
				};
				if (err.response) {
					errObj.data = err.response.data;
					errObj.status = err.response.status;
				}
				// setApiErr(errObj);
				setIsLoadingHero(false);
				dispatch(setError(errObj));
				history.push('/error');
			}
		};

		const getItemsData = async () => {
			setIsLoadingItems(true);
			try {
				const { data } = await getApiDetailedHeroItems({
					region,
					account,
					heroId,
					accessToken,
				});
				setItems(data);
				setIsLoadingItems(false);
			} catch (err) {
				setItems(null);
				console.log(err);
				setIsLoadingItems(false);
			}
		};

		if (accessToken) {
			getHeroData();
			getItemsData();
		}
	}, [region, account, heroId, accessToken, history, dispatch]);

	const detailHeader = () => {
		// Asignamos valores a través de
		const {
			name,
			// valor: alias
			class: classSlug,
			gender,
			level,
			hardcore,
			seasonal,
			paragonLevel,
			alive,
			seasonCreated,
		} = hero;

		return {
			name,
			classSlug,
			gender,
			level,
			hardcore,
			seasonal,
			paragonLevel,
			alive,
			seasonCreated,
		};
	};

	const detailStats = () => {
		// Devuelve el contenido de stats y agrega classSlug
		return { ...hero.stats, classSlug: hero.class };
	};

	if (isLoadingHero || isLoadingItems) {
		return <BaseLoading />;
	}

	return (
		<div className='hero-view'>
			{hero && <HeroDetailHeader detail={detailHeader()} />}
			<div className='row'>
				{/* <!-- 12 columnas de 'xs' -> 'md', 8 columnas desde 'lg' hacia arriba  --> */}
				{/* <!-- En 'lg' orden 2 --> */}
				<div className='col-md-12 col-lg-8 order-lg-2'>
					{isLoadingItems && <BaseLoading />}
					{/* <!-- Componente de Items del personaje --> */}
					{items && <HeroItems items={items} />}
				</div>

				{/* <!-- 12 columnas de 'xs' -> 'md', 4 columnas desde 'lg' hacia arriba --> */}
				{/* <!-- En 'lg' orden 1 --> */}
				<div className='col-md-12 col-lg-4 order-lg-1'>
					{hero && (
						<>
							<HeroAttributes attributes={detailStats()} />
							<HeroSkills skills={hero.skills} />
						</>
					)}
				</div>
			</div>
		</div>
	);
};
