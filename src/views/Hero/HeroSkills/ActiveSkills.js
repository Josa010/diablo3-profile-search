import React from 'react';
import { ActiveSkill } from './ActiveSkill';

const ActiveSkills = ({ skills, active }) => {
	return (
		<div className={`active-skills ${active}`}>
			<h4 className='my-5'>Active</h4>

			<div className='skills'>
				<div className='row'>
					{skills.map((skill, idx) => (
						<div
							className='col-6 col-lg-12 active-skill-container'
							key={idx}
						>
							<ActiveSkill
								skill={skill.skill}
								rune={skill.rune}
								slotNum={idx + 1}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ActiveSkills;
