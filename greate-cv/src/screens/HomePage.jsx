import React from 'react';
import { HomeMessage } from '../components/HomeMessage';
import { Footer } from '../components/Footer';
import { StatsLinks } from '../components/StatsLinks';
import { Seo } from '../components/Seo';
import { Projects } from '../components/Projects';
import { GitHubStats } from '../components/GitHubStats';
import { useTitle } from '../hooks/useTitle';

export const HomePage = () => {
	useTitle('Home');
	return (
		<div className="main-container__content">
			<HomeMessage />
			<Projects />
			<Seo />
			<StatsLinks/>
			<GitHubStats />
			<Footer />
		</div>
	);
};
