// Axios para hacer la llamada HTTP
import { get } from 'axios';
// Útil de regiones, que nos devolverá el 'locale' por defecto correspondiente a cada región
import { locales } from '../utils/regions';

// API URL
// https://{region}.api.blizzard.com, donde {region} puede ser 'us', 'eu', 'kr' o 'tw'
const protocol = 'https://';
const host = '.api.blizzard.com/';

export const getApiAccount = ({
	region,
	account,
	accessToken: access_token,
}) => {
	// Recurso de la API al que queremos acceder
	const resource = `d3/profile/${account}/`;
	// API URL completa
	const API_URL = `${protocol}${region}${host}${resource}`;
	// Locale
	const locale = locales[region];

	// Parámetros:
	// - Token de acceso (recuperado desde Vuex)
	// - Locale
	const params = {
		access_token,
		locale,
	};

	// Retornamos el resultado de hacer la llamada a la API, es decir, una promesa
	// que controlaremos (éxito / error) desde el componente
	return get(API_URL, { params });
};

export const getApiHero = ({ region, account, heroId, accessToken }) => {
	const resource = `d3/profile/${account}/hero/${heroId}`;
	const API_URL = `${protocol}${region}${host}${resource}`;
	const locale = locales[region];

	const params = {
		access_token: accessToken,
		locale,
	};

	return get(API_URL, { params });
};

export const getApiDetailedHeroItems = ({
	region,
	account,
	heroId,
	accessToken,
}) => {
	const resource = `d3/profile/${account}/hero/${heroId}/items`;
	const API_URL = `${protocol}${region}${host}${resource}`;
	const locale = locales[region];

	const params = {
		access_token: accessToken,
		locale,
	};

	return get(API_URL, { params });
};
