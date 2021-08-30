import React from 'react';
import { PassiveSkill } from './PassiveSkill';

const PassiveSkills = ({ skills, active }) => {
	return (
		<div className={`passive-skills ${active}`}>
			<h4 className='my-5'>Passive</h4>
			<div className='skills'>
				<div className='row'>
					{skills.map((skill, idx) => (
						<div className='col-6 col-lg-12' key={idx}>
							<PassiveSkill skill={skill.skill} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PassiveSkills;
