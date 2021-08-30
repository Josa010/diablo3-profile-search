import React from 'react';
import { formatNumber } from '../../../utils/formatNumber';
import {
	resourceClassName,
	resourceDisplayName,
} from '../../../utils/resources';

export const HeroResources = ({ resources }) => {
	const classResourceName = () => {
		return `resource-${resourceClassName(resources.classSlug)}`;
	};
	const displayResourceName = () => {
		return resourceDisplayName(resources.classSlug);
	};
	// Solo demon-hunter tiene recurso secundario
	const hasSecondaryResource = () => {
		return resources.classSlug === 'demon-hunter';
	};

	return (
		<div className='resource-wrapper'>
			<div className='resource'>
				<div className='d-flex justify-content-start align-items-center'>
					{/* <!-- Imagen Vida --> */}
					<div className='resource-icon resource-life' />
					{/* <!-- Nombre --> */}
					<div className='ms-3 text-uppercase name-text'>
						<span>{resources.resources.life.name}</span>
					</div>
					{/* <!-- Valor --> */}
					<div className='ms-3'>
						<span className='text-monospace'>
							{' '}
							{formatNumber(resources.resources.life.val)}{' '}
						</span>
					</div>
				</div>
			</div>

			<hr />

			<div className='resource'>
				<div className='d-flex justify-content-start align-items-center'>
					{/* <!-- Imagen Recurso --> */}
					<div className={`resource-icon ${classResourceName()}`} />
					{/* // <!-- Nombre --> */}
					<div
						className={`ms-3 text-uppercase name-text resource-name-${resources.classSlug}`}
					>
						<span>{displayResourceName()}</span>
					</div>
					<div className='ms-3'>
						{/* <!-- Valor --> */}
						<span className='text-monospace'>
							{formatNumber(
								resources.resources.primaryResource.val
							)}
							{hasSecondaryResource() && (
								<>
									{/* <!-- Valor recurso secundario --> */}
									<span className='mx-0 text-muted'>/</span>
									<span>
										{' '}
										{formatNumber(
											resources.resources
												.secondaryResource.val
										)}{' '}
									</span>
								</>
							)}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
