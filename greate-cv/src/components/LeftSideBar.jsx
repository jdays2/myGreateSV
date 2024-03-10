import React from 'react';
import { BoxBorder } from './ui/BoxBorder';
import { PersonalInfo } from './PersonalInfo';
import { WorkHistory } from './WorkHistory';
import { Languages } from './Languages';
import { Socials } from './Socials';

export const LeftSideBar = ({ socials }) => {
	return (
		<aside className="main-container__left-bar">
			<BoxBorder sticky>
				<PersonalInfo />
				<WorkHistory />
				<Languages />
				<Socials socials={socials} />
			</BoxBorder>
		</aside>
	);
};
