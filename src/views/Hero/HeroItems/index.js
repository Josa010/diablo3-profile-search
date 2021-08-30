import React from 'react';
import { ItemDetail } from './ItemDetail';

export const HeroItems = ({ items }) => {
	const defaultItems = {
		head: {
			slotName: 'head',
		},
		shoulders: {
			slotName: 'Shoulders',
		},
		torso: {
			slotName: 'Torso',
		},
		neck: {
			slotName: 'Neck',
		},
		hands: {
			slotName: 'Hands',
		},
		waist: {
			slotName: 'Waist',
		},
		bracers: {
			slotName: 'Bracers',
		},
		leftFinger: {
			slotName: 'Left Finger',
		},
		legs: {
			slotName: 'Legs',
		},
		rightFinger: {
			slotName: 'Right Finger',
		},
		mainHand: {
			slotName: 'Main Hand',
		},
		feet: {
			slotName: 'Feet',
		},
		offHand: {
			slotName: 'Off Hand',
		},
	};

	const itemsData = () => {
		// Fusionar objetos:
		// Esto lo hacemos para mostrar el hueco vacío en caso de que ese objeto no esté equipado
		// Si NO hay item equipado, manda el valor de 'defaultItems' correspondiente
		// Si hay item equipado, manda la info del item
		return {
			...defaultItems,
			...items,
		};
	};

	return (
		<section className='hero-items mb-5'>
			<h2 className='font-diablo'>Items</h2>

			<hr className='bg-white' />

			{/* <!-- Grid de 3 columnas. Mostramos solo una centrada --> */}
			<div className='row'>
				<div className='col-4 offset-4'>
					<ItemDetail item={itemsData().head} />
				</div>
			</div>

			<hr />

			{/* <!-- Grid de 3 columnas --> */}
			<div className='row'>
				<div className='col'>
					<ItemDetail item={itemsData().shoulders} />
				</div>
				<div className='col'>
					<ItemDetail item={itemsData().torso} />
				</div>
				<div className='col'>
					<ItemDetail item={itemsData().neck} />
				</div>
			</div>

			<hr />

			{/* <!-- Grid de 3 columnas --> */}
			<div className='row'>
				<div className='col'>
					<ItemDetail item={itemsData().hands} />
				</div>
				<div className='col'>
					<ItemDetail item={itemsData().waist} />
				</div>
				<div className='col'>
					<ItemDetail item={itemsData().bracers} />
				</div>
			</div>

			<hr />

			{/* <!-- Grid de 3 columnas --> */}
			<div className='row'>
				<div className='col'>
					<ItemDetail item={itemsData().leftFinger} />
				</div>
				<div className='col'>
					<ItemDetail item={itemsData().legs} />
				</div>
				<div className='col'>
					<ItemDetail item={itemsData().rightFinger} />
				</div>
			</div>

			<hr />

			{/* <!-- Grid de 3 columnas --> */}
			<div className='row'>
				<div className='col'>
					<ItemDetail item={itemsData().mainHand} />
				</div>
				<div className='col'>
					<ItemDetail item={itemsData().feet} />
				</div>
				<div className='col'>
					<ItemDetail item={itemsData().offHand} />
				</div>
			</div>
		</section>
	);
};
