import React from 'react';
import { Spinner } from 'react-bootstrap';

export const BaseLoading = ({ variant = 'info', animation = 'border' }) => {

	return (
		<div className='loading-layout'>
			<div className='loading-wrapper text-center py-5 w-100'>
				<div className='spinner-wrapper w-100'>
					<Spinner
						animation={animation}
						role='status'
						variant={variant}
					/>
				</div>
				<h1 className='my-5'>Loading...</h1>
			</div>
		</div>
	);
};
