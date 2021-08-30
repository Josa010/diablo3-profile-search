import React from 'react';

export const PassiveSkill = ({ skill }) => {
	const skillUrl = () => {
		const sizes = {
			21: 21,
			42: 42,
			64: 64,
		};
		const host = `http://media.blizzard.com/d3/icons/skills/${sizes[42]}/`;
		return `${host}${skill.icon}.png`;
	};

	return (
		<div className='d-flex align-items-center mb-3'>
			<div className='me-2'>
				{/* <!-- Imagen Habilidad Pasiva --> */}
				<img src={skillUrl()} alt={skill.name} />
			</div>

			<div>
				{/* <!-- Nombre --> */}
				<p className='skill-name m-0' title={skill.description}>
					{skill.name}
				</p>
			</div>
		</div>
	);
};
