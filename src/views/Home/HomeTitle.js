import React from 'react';

export const HomeTitle = () => {
	return (
		<div className='home-title text-center'>
			<h1 className='my-5 font-diablo'>Diablo 3 Profile Finder</h1>

			<p className='lead text-muted'>
				Enter your
				<em>
					<a
						href='https://eu.battle.net/support/es/article/75767'
						target='_blank'
						title='Format: YourProfile#1234'
						rel='noreferrer'
					>
						battle-tag
					</a>
				</em>
				and select your region to see your profile!
			</p>
			<hr className='mt-5' />
		</div>
	);
};
