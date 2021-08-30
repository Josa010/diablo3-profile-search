import React, { Suspense, useState, lazy } from 'react';
import { Nav } from 'react-bootstrap';
import { BaseLoading } from '../../../components/BaseLoading';

const ActiveSkills = lazy(() =>
	import(/* webpackChunkName: "ActiveSkills" */ './ActiveSkills')
);
const PassiveSkills = lazy(() =>
	import(/* webpackChunkName: "PassiveSkills" */ './PassiveSkills')
);

export const HeroSkills = ({ skills }) => {
	const [activeComponent, setActiveComponent] = useState('ActiveSkills');

	const changeComponent = (component) => {
		setActiveComponent(component);
	};

	return (
		<div className='skills-wrapper mt-5'>
			<h2 className='font-diablo'>Skills</h2>
			<hr className='bg-white' />
			<Nav
				variant='pills'
				onSelect={(selectedKey) => changeComponent(selectedKey)}
			>
				<Nav.Item>
					<Nav.Link eventKey='ActiveSkills'>Active</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey='PassiveSkills'>Passive</Nav.Link>
				</Nav.Item>
			</Nav>
			<Suspense fallback={<BaseLoading />}>
				<ActiveSkills
					skills={skills.active}
					active={activeComponent === 'ActiveSkills' ? '' : 'd-none'}
				/>
				<PassiveSkills
					skills={skills.passive}
					active={activeComponent === 'PassiveSkills' ? '' : 'd-none'}
				/>
			</Suspense>
			{/* <hr /> */}
		</div>
	);
};
