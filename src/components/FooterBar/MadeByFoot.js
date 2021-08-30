import React from 'react';

export const MadeByFoot = () => {
	return (
		<p className='text-muted m-0 pt-1 pl-3 text-left text-sm-right'>
			<small>
				Made by{' '}
				<a
					href='https://github.com/Josa010'
					target='_blank'
					rel='noreferrer'
				>
					Josafat Muñoz
				</a>{' '}
				inspired by{' '}
				<a
					href='https://platzi.com/clases/avanzado-vue/'
					target='_blank'
					rel='noreferrer'
				>
					Platzi
				</a>
			</small>
		</p>
	);
};
