import React from 'react';
import { Badge } from 'react-bootstrap';
import { ItemDetailGem } from './ItemDetailGem';

export const ItemDetail = ({ item }) => {
	// Resuelve la URL de la imagen
	const itemUrl = () => {
		const host = 'http://media.blizzard.com/d3/icons/items/large/';
		return `${host}${item.icon}.png`;
	};
	// Comprueba si el item tiene gemas
	const itemHasGems = () => {
		return Object.prototype.hasOwnProperty.call(item, 'gems');
	};
	// Si tiene gemas, comprueba si es Gema o Joya
	// Puede haber varias Gemas. Solo puede haber una Joya. No puede haber joyas y gemas mezcladas
	const gemOrJewel = () => {
		return item.gems[0].isGem ? 'Gems' : 'Jewel';
	};
	// Clase CSS para saber la rareza
	const itemClassColor = () => {
		if (Object.prototype.hasOwnProperty.call(item, 'displayColor')) {
			return `item-${item.displayColor}`;
		}
		// Si no tiene color (es que no hay objeto equipado)
		return 'item-none';
	};

	return (
		// <!-- Clase que determina el color -->
		<div
			className={`text-center bg-dark h-100 pt-3 d3-icon-item ${itemClassColor()}`}
		>
			<div className='d-flex flex-column justify-content-between h-100'>
				{/* <!-- Si el item tiene ID, es que tenemos la información --> */}
				{/* <!-- Es decir, que tiene un objeto equipado. --> */}
				{item.id ? (
					<>
						<div>
							{item && (
								<div className='item-image'>
									{/* <!-- Nombre del objeto --> */}
									<p className='text-muted'>{item.name}</p>
									{/* <!-- Imagen correspondiente al objeto --> */}
									<img
										src={itemUrl()}
										alt={item.slotName + ' ' + item.name}
									/>
								</div>
							)}
						</div>

						<div>
							{/* <!-- No todos los objetos tienen gemas --> */}
							{/* <!-- Por lo tanto, si el objeto tiene gemas engarzadas --> */}
							{itemHasGems() && (
								<>
									{/* //   <!-- Puede ser Gema o Joya --> */}
									<small>{gemOrJewel()}:</small>
									<ul className='list-inline'>
										{/* <!-- Un objeto puede tener varias gemas --> */}
										{item.gems.map((gem, index) => (
											<li
												key={`${gem}-${index}`}
												className='list-inline-item'
											>
												{/* <!-- Componente gema --> */}
												<ItemDetailGem gem={gem} />
											</li>
										))}
									</ul>
								</>
							)}
						</div>
					</>
				) : (
					// <!-- En caso de que no tenga el objeto equipado -->
					<p>
						{/* <!-- Mostramos el nombre del slot y dejamos el contenido vacío --> */}
						<Badge className='text-dark'> {item.slotName} </Badge>
					</p>
				)}
			</div>
		</div>
	);
};
