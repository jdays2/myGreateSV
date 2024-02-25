import React from 'react';
import { HomeMessage } from '../components/HomeMessage';
import { DownloadCV } from '../components/DownloadCV';

export const HomePage = () => {
	return (
		<div className="home">
			<aside className="home__left-bar"></aside>
			<div className="home__content">
				<HomeMessage />
			</div>
			<aside className="home__right-bar">
				<DownloadCV />
			</aside>
		</div>
	);
};
