import React from 'react';
import { Alert } from 'react-bootstrap';

export const About = () => {
	return (
		<div className='about-view mb-5'>
			<div className='text-center'>
				{/* <!-- Directiva v-diablo, en blanco 😎 --> */}
				<h1 className='my-5 font-diablo'>Diablo 3 Profile Finder</h1>

				<hr className='bg-dark mb-5' />

				<p className='lead'>
					Diablo III is a genre-defining action-RPG set in Sanctuary,
					a world ravaged by the eternal conflict between angels and
					demons.
				</p>
				<p className='lead'>
					<span className='fw-bold'>D3PF</span> allows you to enter
					your battle-tag to see your profile, your last played
					heroes, your items, skills and more.
				</p>
			</div>

			<hr className='bg-dark my-5' />

			<div className='mt-5'>
				<h2 className='mb-4'>API Rate Limit</h2>
				<Alert show variant='dark'>
					Clients exceeding these limits may experience slower service
					or a response error. See the
					<a href='https://develop.battle.net/documentation/guides/getting-started'>
						Getting Started Guide
					</a>{' '}
					for more details.
				</Alert>

				<dl className='row mt-5 text-center text-sm-left'>
					<div className='col-sm-6 mb-3'>
						<dt>36,000 requests per hour</dt>
						<dd>Long-term Quota</dd>
					</div>

					<div className='col-sm-6'>
						<dt>100 requests per second</dt>
						<dd>Short-term Throttle</dd>
					</div>
				</dl>
			</div>

			<div className='my-5'>
				<h2>Getting Started</h2>

				<p>
					Before you can get started using the Blizzard APIs, you
					must:
				</p>

				<ol>
					<li>Login or create a new Battle.net account.</li>
					<li>Create a client through the API Access menu option.</li>
					<li>Generate a secret for the client.</li>
					<li>Understand how Blizzard APIs work with OAuth.</li>
				</ol>

				<p className='text-break'>
					Read more here:
					<a href='https://develop.battle.net/documentation/guides/getting-started'>
						https://develop.battle.net/documentation/guides/getting-started
					</a>
				</p>
			</div>

			<hr />
		</div>
	);
};
