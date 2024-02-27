import React from 'react';
import { BoxBorderless } from './ui/BoxBorderless';

export const StatsLinks = () => {
	return (
		<BoxBorderless>
			<ul className="stats">
				<li>
					<a
						href="https://github.com/jdays2/"
						target="_blank"
						className="stats__item">
						<div className="stats__item-img">
							<img
								src="/public/img/webp/codewars.webp"
								alt="codewars-logo"
							/>
						</div>

						<div className="stats__item-box">
							<p className="stats__item-title">Codewars</p>
							<p className="stats__item-desc txt-sm txt-neutral">
								Rank:5 kyu <br />
								Total Completed Kata:78
							</p>
						</div>
					</a>
				</li>

				<li>
					<a
						href="https://github.com/jdays2/"
						target="_blank"
						className="stats__item">
						<div className="stats__item-img">
							<img
								src="/public/img/jpg/github.jpg"
								alt="github-logo"
							/>
						</div>

						<div className="stats__item-box">
							<p className="stats__item-title">Github</p>
							<p className="stats__item-desc txt-sm txt-neutral">
								A lot of contributions to open source projects
							</p>
						</div>
					</a>
				</li>
			</ul>
		</BoxBorderless>
	);
};
