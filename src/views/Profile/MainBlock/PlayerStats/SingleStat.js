import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatNumber } from '../../../../utils/formatNumber';

export const SingleStat = ({ icoName, icoColor, info }) => {
	return (
		<div className='single-stat w-100 mb-3'>
			<Card className='text-body'>
				<div className='d-flex card-body'>
					<div className='d-block ico-cont'>
						<div className='text-center'>
							{/* <!-- Ícono & Color--> */}
							<FontAwesomeIcon
								icon={icoName}
								className='fa-3x'
								style={{ color: icoColor }}
							/>
						</div>
					</div>
					<div className='flex-grow-1'>
						{/* <!-- Valor & Filtro --> */}
						<h4 className='font-weight-bold mb-0'>
							{formatNumber(info.value)}
						</h4>
						{/* <!-- Texto --> */}
						<span className='text-muted font-weight-light mb-0'>
							{info.text}
						</span>
					</div>
				</div>
			</Card>
		</div>
	);
};
