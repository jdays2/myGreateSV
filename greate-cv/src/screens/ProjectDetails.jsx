import React from 'react';
import { useTitle } from '../hooks/useTitle';
import { ProjectSlider } from '../components/ProjectSlider';
import { BackBtn } from '../components/ui/BackBtn';

export const ProjectDetails = () => {
	useTitle(`${'Project name'}`);

	return (
		<div className="main-container__content">
			<div className="project-det">
				<div className="project-det__head">
					<p className="project-det__title txt-2xl">{'Project Name'}</p>
					<BackBtn link={'/home'} />
				</div>
				<ProjectSlider />
			</div>
		</div>
	);
};
