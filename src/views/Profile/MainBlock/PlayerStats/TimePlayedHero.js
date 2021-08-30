import React from 'react';
import { Badge, ProgressBar } from 'react-bootstrap';

export const TimePlayedHero = ({ heroTime }) => {
	const classHeroBg = () => {
		return `hero-bg-color-${heroTime.classSlug}`;
	};

	return (
		<div className='progress-time-played'>
			<div className='d-flex justify-content-between'>
				<h5 className='mb-0 font-weight-lighter'> {heroTime.hero} </h5>
				<span>
					<Badge bg='secondary' className='w-50p'>
						{(heroTime.time * 100).toFixed(2)}
					</Badge>
				</span>
			</div>

			<ProgressBar
				max={1}
				height='14px'
				label={heroTime.hero}
				now={heroTime.time}
				className={`mb-3 rounded-0 ${classHeroBg()}`}
			/>
		</div>
	);
};
