import React from 'react';
import { MdWorkOutline } from 'react-icons/md';
import { AiOutlineCoffee } from "react-icons/ai";

export const WorkHistory = () => {
	return (
		<div className="work border-bottom">
			<h3 className="work__title">Work History</h3>
			<ul className="work__list">
				<li className="work__item">
					<MdWorkOutline className="work__item-icon" />
					<div className="work__item-box">
						<p className="work__item-title txt-sm">Request Design</p>
						<p className="work__item-date text-xs txt-neutral">
							<span>January 2023</span> - <span>February 2024</span>
						</p>
						<p className="work__item-timeframe text-xs txt-neutral">Fulltime - remote</p>
					</div>
				</li>

        <li className="work__item">
					<AiOutlineCoffee className="work__item-icon" />
					<div className="work__item-box">
						<p className="work__item-title txt-sm">Freelance</p>
						<p className="work__item-date text-xs txt-neutral">
							<span>September 2023</span> - <span>Today</span>
						</p>
						<p className="work__item-timeframe text-xs txt-neutral">Freetime - remote</p>
					</div>
				</li>
			</ul>
		</div>
	);
};
