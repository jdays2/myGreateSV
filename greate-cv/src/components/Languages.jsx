import React from 'react';

export const Languages = ({ lang }) => {
	return (
		<div className="lang border-bottom">
			<h3 className="lang__title">Language</h3>
			<ul className="lang__list">
				{lang.map((i) => {
					return (
						<li
							key={i.type}
							className="lang__item">
							<span className="text-xs">{i.type}</span>
							<span className="text-xs txt-neutral">{i.lvl}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
