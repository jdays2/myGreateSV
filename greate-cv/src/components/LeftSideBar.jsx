import React from 'react';
import { BoxBorder } from './ui/BoxBorder';
import { PersonalInfo } from './PersonalInfo';
import { WorkHistory } from './WorkHistory';
import { Languages } from './Languages';
import { Socials } from './Socials';

export const LeftSideBar = ({ data }) => {
	return (
		<aside className="main-container__left-bar">
			<BoxBorder sticky>
				<PersonalInfo data={data}/>
				<WorkHistory />
				<Languages lang={data.languages}/>
				<Socials socials={data.socials} />
			</BoxBorder>
		</aside>
	);
};
