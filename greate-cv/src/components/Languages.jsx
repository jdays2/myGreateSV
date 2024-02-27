import React from 'react';

export const Languages = () => {
	return (
		<div className="lang border-bottom">
			<h3 className="lang__title">Language</h3>
			<ul className="lang__list">
				<li className="lang__item">
					<span className="text-xs">RU</span>
					<span className="text-xs txt-neutral">Native</span>
				</li>

				<li className="lang__item">
					<span className="text-xs">ENG</span>
					<span className="text-xs txt-neutral">B1-B2</span>
				</li>
			</ul>
		</div>
	);
};
