import React from 'react';
import { HomeMessage } from '../components/HomeMessage';
import { DownloadCV } from '../components/DownloadCV';
import { PersonalInfo } from '../components/PersonalInfo';
import { BoxBorder } from '../components/ui/BoxBorder';
import { Footer } from '../components/Footer';
import { StatsLinks } from '../components/StatsLinks';

export const HomePage = () => {
	return (
		<div className="home">
			<aside className="home__left-bar">
				<BoxBorder>
					<PersonalInfo />
				</BoxBorder>
			</aside>
			<div className="home__content">
				<HomeMessage />
				<StatsLinks />
				<Footer />
			</div>
			<aside className="home__right-bar">
				<DownloadCV />
			</aside>
		</div>
	);
};
