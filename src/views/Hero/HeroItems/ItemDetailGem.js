import React from 'react';

export const ItemDetailGem = ({ gem }) => {
	const gemUrl = () => {
		// Cambio de 'large' por 'small'
		const host = 'http://media.blizzard.com/d3/icons/items/small/';
		return `${host}${gem.item.icon}.png`;
	};

	return (
		<>
			<img src={gemUrl()} alt={gem.item.name} title={gem.item.name} />
		</>
	);
};
