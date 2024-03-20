import React from 'react';
import { BoxBorder } from './ui/BoxBorder';

export const DownloadCV = () => {
	return (
		<BoxBorder>
			<div className="download-sv">
				<div className="download-sv__img">
					<img
						src="public/img/jpg/sv.jpg"
						alt=""
					/>
				</div>

				<a
					download
					href="/public/cv/newYear.pdf"
					className="gray-btn">
					<span className="gray-btn__txt text-xs">Download my CV</span>
				</a>
			</div>
		</BoxBorder>
	);
};
