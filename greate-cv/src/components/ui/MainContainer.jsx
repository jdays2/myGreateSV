import React from 'react';
import { Outlet } from 'react-router-dom';
import { LeftSideBar } from '../LeftSideBar';
import { RightSideBar } from '../RightSideBar';

export const MainContainer = () => {
	return (
		<div className="main-container container">
			<LeftSideBar />
			<Outlet />
			<RightSideBar />
		</div>
	);
};
