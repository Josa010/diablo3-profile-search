import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { regions } from '../../utils/regions';

export const HomeForm = () => {
	const history = useHistory();

	const regionsUppercase = () => {
		return regions.map((region) => ({
			value: region,
			text: region.toUpperCase(),
		}));
	};

	const [formValues, handleInputChange] = useForm({
		battleTag: 'SuperRambo#2613',
		region: 'eu',
	});

	const { battleTag, region } = formValues;

	const onSubmit = (e) => {
		e.preventDefault();

		history.push({
			pathname: `region/${region}/profile/${battleTag.replace(
				'#',
				'-'
			)}/`,
			state: { region, battleTag: battleTag.replace('#', '-') },
		});
	};

	return (
		<div className='search-form my-5'>
			<div className='row'>
				<div className='col-12 col-md-8 offset-md-2'>
					<Form onSubmit={onSubmit}>
						<Form.Group controlId='input-group-1' className='mb-3'>
							<Form.Label>BattleTag: </Form.Label>
							<Form.Control
								name='battleTag'
								value={battleTag}
								onChange={handleInputChange}
								type='text'
								size='lg'
								required
								placeholder='BattleTag'
							/>
							<Form.Text className='text-muted'>
								Format: YourProfile#1234
							</Form.Text>
						</Form.Group>

						<Form.Group controlId='input-group-3'>
							<Form.Label label-for='input-region'>
								Region:
							</Form.Label>
							<Form.Select
								aria-label='Regions'
								name='region'
								value={region}
								onChange={handleInputChange}
								size='lg'
								options={regionsUppercase()}
								required
							>
								{regions.map((region) => (
									<option value={region} key={region}>
										{region.toUpperCase()}
									</option>
								))}
							</Form.Select>
						</Form.Group>

						<div className='d-flex justify-content-end mt-5'>
							<Button type='submit' variant='primary' size='lg'>
								Submit
							</Button>
						</div>
					</Form>
				</div>
			</div>
		</div>
	);
};
