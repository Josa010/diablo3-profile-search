import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PoweredByFoot = ({ icons }) => {
	return (
		<div className='text-center '>
			<p className='text-muted'>Powered by</p>

			<ul className='list-inline'>
				{icons.map((icon, idx) => {
					return (
						<li className='list-inline-item mx-2' key={idx}>
							<a
								href={icon.href}
								target='_blank'
								title={icon.href}
								rel='noreferrer'
							>
								<FontAwesomeIcon
									icon={icon.classes}
									className='fa-lg'
									style={{ color: icon.color }}
								/>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
