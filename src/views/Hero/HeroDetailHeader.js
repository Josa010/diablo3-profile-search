import React from 'react';
import { Badge } from 'react-bootstrap';
import { classToName } from '../../utils/heroName';

export const HeroDetailHeader = ({ detail }) => {
	const heroClass = () => {
		const gender = detail.gender === 0 ? 'male' : 'female';
		return `hero-${detail.classSlug} ${gender}`;
	};

	return (
		<div className='hero-detail-header my-5 row'>
			<div className='col-12'>
				{/* <!-- Avatar --> */}
				<div className='d-flex justify-content-center mb-3'>
					<div className={`hero-detail-avatar ${heroClass()}`}></div>
				</div>

				<div className='text-center'>
					{/* <!-- Nombre --> */}
					<h1 className='font-diablo text-truncate text-bone'>
						{detail.name}
					</h1>

					<div className='text-monospace'>
						<small>
							{/* <!-- Nivel --> */}
							<span>{detail.level}</span>
							{/* <!-- Nivel de Leyenda --> */}
							{detail.paragonLevel > 0 && (
								<span
									className='text-info'
									v-if='detail.paragonLevel'
								>
									<span className='text-white'> · </span>(
									{detail.paragonLevel})
								</span>
							)}
							<span> · {classToName(detail.classSlug)}</span>
							{/* <!-- ¿Es de temporada? --> */}
							{detail.seasonal && (
								<span
									v-if='detail.seasonal'
									className='text-success'
								>
									{' '}
									· Seasonal{' '}
								</span>
							)}
							{/* <!-- ¿Es hardcore? --> */}
							{detail.hardcore && (
								<span className='text-danger'> · Hardcore</span>
							)}
						</small>

						<div>
							{/* <!-- En qué temporada ha sido creado el héroe --> */}
							<small className='text-muted'>
								Season created:
							</small>{' '}
							<Badge bg='secondary'>{detail.seasonCreated}</Badge>
						</div>
					</div>

					<hr />
				</div>
			</div>
		</div>
	);
};
