import React from 'react';
import { useSelector } from 'react-redux';

export const ErrorView = () => {
	const { error } = useSelector((state) => state.ui);

	const errorParams = error ? Object.entries(error.routeParams) : null;
	const errorData = error ? Object.entries(error.data) : null;

	return (
		<div className='error-page m-5'>
			<hr className='my-5' />
			{/* <!-- Si hay error --> */}
			{error ? (
				<div>
					{/* <!-- Si hay codigo de error --> */}
					<h1 className='my-5'>
						Error {error.status && <span>{error.status}</span>}
					</h1>

					{/* <!-- Si hay parámetros de ruta --> */}
					{errorParams && (
						<div>
							<h2>Query Params:</h2>
							<ul className='list-unstyled'>
								{errorParams.map((val, key) => (
									<li
										v-for='(val, key) in error.routeParams'
										key={key}
									>
										👉 {val[0].toUpperCase()}:{' '}
										<span className='lead text-muted'>
											{val[1]}
										</span>
									</li>
								))}
							</ul>

							<hr className='my-5' />
						</div>
					)}

					{/* <!-- Si hay mensaje de error --> */}
					{error.message && (
						<div>
							<p className='lead'> {error.message}</p>
						</div>
					)}

					{/* <!-- Si hay información de error adicional --> */}
					{error.data && (
						<div>
							<ul className='list-unstyled'>
								{errorData.map((val, key) => (
									<li key={key}>
										{val[0].toUpperCase()}:{' '}
										<span className='lead text-muted'>
											{val[1]}
										</span>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			) : (
				// {/* <!-- Si NO hay error --> */}
				<div>
					<h1 className='my-5'>Error Page</h1>
					<p className='lead'>What are you doing here? 🤔</p>
				</div>
			)}
		</div>
	);
};
