import React from 'react';
import { DownloadCV } from './DownloadCV';

export const RightSideBar = () => {
	return (
		<aside className="main-container__right-bar">
			<div className="sticky">
				<DownloadCV />
			</div>
		</aside>
	);
};
