import React from 'react';
import { Nav } from 'react-bootstrap';

export const FootLinks = () => {
	return (
		<div>
			<Nav>
				<Nav.Item>
					<Nav.Link href='/home'>Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='/about'>About</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link
						href='https://github.com/Josa010/diablo3-profile-search'
						target='_blank'
					>
						Github
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
};
