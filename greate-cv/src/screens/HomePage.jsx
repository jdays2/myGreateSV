import React from 'react';
import { HomeMessage } from '../components/HomeMessage';
import { Footer } from '../components/Footer';
import { StatsLinks } from '../components/StatsLinks';
import { Seo } from '../components/Seo';
import { Projects } from '../components/Projects';
import { GitHubStats } from '../components/GitHubStats';
import { useTitle } from '../hooks/useTitle';
import { useGetCvQuery } from '../redux/slices/cvApiSlice';

export const HomePage = () => {
	const { data, isLoading, error } = useGetCvQuery();

	console.log(data);
	useTitle('Home');
	return (
		<div className="main-container__content">
			<HomeMessage />
			<Projects />
			<Seo />
			<StatsLinks />
			<GitHubStats />
			<Footer />
		</div>
	);
};
