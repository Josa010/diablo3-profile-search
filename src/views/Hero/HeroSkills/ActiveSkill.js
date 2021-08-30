import React from 'react';

export const ActiveSkill = ({ skill, rune, slotNum }) => {
	const skillUrl = () => {
		// Posibles tamaños (px)
		const sizes = [21, 42, 64];
		// API URL para imágenes
		const host = `http://media.blizzard.com/d3/icons/skills/${sizes[1]}/`;
		// Ejemplo:
		// http://media.blizzard.com/d3/icons/skills/42/p6_necro_bonespikes.png
		return `${host}${skill.icon}.png`;
	};
	// Clase CSS para los slots
	const slotClass = () => {
		return `slot-${slotNum}`;
	};

	return (
		<div className='d-flex align-items-center mb-3'>
			<div className='me-2'>
				{/* <!-- Slot (identificador de skill) --> */}
				<span className={`slot ${slotClass()}`}></span>
				{/* <!-- La imagen · Skill URL --> */}
				<img src={skillUrl()} alt={skill.name} />
			</div>

			<div>
				{/* //   <!-- Nombre de la habilidad --> */}
				<p className='skill-name m-0' title={skill.description}>
					{skill.name}
				</p>
				{/* //   <!-- Runa (si tiene) --> */}
				{rune && (
					<small
						className='rune-name text-muted'
						title={rune.description}
					>
						{rune.name}
					</small>
				)}
			</div>
		</div>
	);
};
