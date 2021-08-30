import React from 'react';
import { HeroAttributeList } from './HeroAttributeList';
import { HeroResources } from './HeroResources';

export const HeroAttributes = ({ attributes }) => {
	// Definimos:
	// Los atributos principales
	const coreAttributes = [
		'strength',
		'dexterity',
		'vitality',
		'intelligence',
	];
	// Los atributos secundarios
	const secondaryAttributes = ['damage', 'toughness', 'healing'];
	// Los recursos
	const resources = ['life', 'primaryResource', 'secondaryResource'];

	// Creamos el objeto de atributos principales
	const coreAttributesFunc = () => {
		return coreAttributes.map((item) => ({
			name: item,
			val: attributes[item],
		}));
	};
	// Creamos el objeto de atributos principales
	const secondaryAttributesFunc = () => {
		return secondaryAttributes.map((item) => ({
			name: item,
			val: attributes[item],
		}));
	};
	const resourcesFunc = () => {
		// Creamos el objeto de recursos
		// Agregamos el tipo de personaje `classSlug` (necesario para los Sprites CSS)
		const data = {
			classSlug: attributes.classSlug,
			resources: {},
		};
		resources.forEach((item) => {
			data.resources[item] = { name: item, val: attributes[item] };
		});
		return data;
	};

	return (
		<div className='h-attriubutes'>
			{/* <!--Título--> */}
			<h2 className='font-diablo'>Attributes</h2>

			<hr className='bg-white' />

			<div className='attributes'>
				{/* <!-- Atributos Principales--> */}
				<div className='core'>
					<HeroAttributeList attributes={coreAttributesFunc()} />
				</div>

				<hr />

				{/* <!-- Atributos Secundarios--> */}
				<div className='secondary'>
					<HeroAttributeList attributes={secondaryAttributesFunc()} />
				</div>
			</div>

			<hr />

			{/* <!-- Recursos --> */}
			<div className='resources'>
				<HeroResources resources={resourcesFunc()} />
			</div>
		</div>
	);
};
