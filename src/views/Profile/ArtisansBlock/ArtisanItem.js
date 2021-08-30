import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const ArtisanItem = ({ artisan }) => {
	return (
		<div className='artisan-item d-flex bg-dark p-3 mb-2 rounded'>
			<div className='icon d-flex justify-content-center align-items-center rounded-circle me-2'>
				{/* <!-- <span class="display-4">{{ artisan.emoji}}</span> --> */}
				{/* <!-- Usar Ícono --> */}
				<FontAwesomeIcon
					icon={artisan.icon}
					className='fa-2x'
					style={{ color: artisan.color }}
				/>
			</div>

			{/* <!-- Bloque Contenido --> */}
			<div className='content'>
				<h5 className='fw-bold text-capitalize'> {artisan.name} </h5>

				{/* <!-- Si hay artesano normal --> */}
				{artisan.normal.level > 0 && (
					<p className='m-0 fw-normal'>
						Level {artisan.normal.level} (normal)
					</p>
				)}

				{/* <!-- Si hay artesano hardcore --> */}
				{artisan.hardcore.level > 0 && (
					<p className='mb-0 fw-normal text-muted'>
						Level {artisan.hardcore.level}
						<span className='text-danger'>(hardcore)</span>
					</p>
				)}
			</div>
		</div>
	);
};
