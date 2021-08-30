import React from 'react';
import { Table } from 'react-bootstrap';
import { formatNumber } from '../../../../utils/formatNumber';
import { HeroClassLevel } from './HeroClassLevel';
import { HeroIco } from './HeroIco';

export const HeroesList = ({ heroes }) => {
	return (
		<div className='heroes-list border-top border-secondary mt-5 pt-5'>
			<Table bordered hover variant='dark' responsive>
				<thead>
					<tr>
						<th>Name</th>
						<th>Class</th>
						<th>Elite Kills</th>
					</tr>
				</thead>
				<tbody>
					{heroes.map((hero) => (
						<tr key={hero.id}>
							<td className='cursor-pointer'>
								{' '}
								<HeroIco hero={hero} />{' '}
							</td>
							<td>
								<HeroClassLevel hero={hero} />
							</td>
							<td>{formatNumber(hero.kills.elites)}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};
