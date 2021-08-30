import React from 'react';
import { formatNumber } from '../../../utils/formatNumber';

export const HeroAttributeList = ({ attributes }) => {
	// console.log(attributes);
	return (
		<ul className='list-unstyled'>
			{/* <!-- Itera --> */}
			{attributes.map((attr) => (
				<li key={attr.name} className='mb-1'>
					<div className='d-flex justify-content-between'>
						{/* <!-- Nombre atributo --> */}
						<div className='ps-2 text-capitalize name-text'>
							{attr.name}
						</div>
						{/* <!-- Valor formateado --> */}
						<div className='px-2 text-monospace'>
							{formatNumber(attr.val)}
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};
