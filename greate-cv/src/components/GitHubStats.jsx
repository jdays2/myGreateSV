import React from 'react';
import { BoxBorderless } from './ui/BoxBorderless';

export const GitHubStats = () => {
	return (
		<BoxBorderless>
			<div className="github">
				<div className="github__img">
					<img
						src="/public/img/png/github-stats.png"
						alt="github-stats-img"
					/>
				</div>
			</div>
		</BoxBorderless>
	);
};
