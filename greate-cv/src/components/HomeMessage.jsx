import React from 'react';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { IoCodeOutline } from 'react-icons/io5';

export const HomeMessage = () => {
	return (
		<div className="home-message">
			<div className="home-message__icon-box">
				<IoCodeOutline className="home-message__icon" />
				<IoCodeSlashOutline className="home-message__icon" />
			</div>

			<div className="home-message__text">
				<h1 className="txt-2xl">Mark 'JDayS' Gorsharik</h1>
				<p className="txt-sm txt-neutral">
					Saif Al-Jilani, Experienced Web Developer with 3 years in software
					engineering, specializing in React JS, Tailwind, Ant Design, and
					backend technologies like Node JS (Express, Nest JS). Proven track
					record in delivering enterprise-level projects across the MENA region
					and the US. Proficient in cloud technologies and dedicated to creating
					seamless user interfaces and robust back-end solutions. Effective
					collaborator with a commitment to continuous learning. Excited about
					contributing my skills to new challenges and projects.
				</p>
			</div>
		</div>
	);
};
