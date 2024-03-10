import React from 'react';
import { Outlet } from 'react-router-dom';
import { LeftSideBar } from '../LeftSideBar';
import { RightSideBar } from '../RightSideBar';
import { useGetCvQuery } from '../../redux/slices/cvApiSlice';

export const MainContainer = () => {
	const { data, isLoading, error } = useGetCvQuery();

	return isLoading ? (
		<p>Loading...</p>
	) : (
		data && (
			<div className="main-container container">
				<LeftSideBar data={data[0]}/>
				<Outlet />
				<RightSideBar />
			</div>
		)
	);
};
