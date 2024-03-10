import React from 'react';
import { LuMail } from 'react-icons/lu';
import { FiPhone } from 'react-icons/fi';
import { RiSpeakLine } from 'react-icons/ri';
import { CopyUrlBtn } from './ui/CopyUrlBtn';
import { FaConnectdevelop } from 'react-icons/fa';
import { LiaProjectDiagramSolid } from 'react-icons/lia';

export const PersonalInfo = ({ data }) => {
	return (
		<div className="profile border-bottom">
			<CopyUrlBtn />
			<div className="profile__img">
				<img
					src="/public/img/png/sample-photo.png"
					alt="profile-img"
				/>
			</div>

			<div className="profile__box">
				<h2 className="profile__box-name txt-xl1">
					{data.firstName} {data.lastName}
				</h2>

				<ul className="profile__contacts">
					<li className="profile__contacts-item">
						<LuMail className="profile__contacts-item-icon" />
						<p className="text-xs">{data.email}</p>
					</li>

					<li className="profile__contacts-item">
						<FiPhone className="profile__contacts-item-icon" />
						<p className="text-xs">{data.number}</p>
					</li>
				</ul>
			</div>

			<ul className="profile__stack">
				{data.stack.map((i) => {
					return (
						<li
							key={i}
							className="profile__stack-item">
							<span className="profile__stack-item-txt text-xs">{i}</span>
						</li>
					);
				})}
			</ul>

			<div className="profile__exp">
				<div className="profile__exp-item">
					<FaConnectdevelop />
					<p className="text-xs">
						{data.experience.years}{' '}
						{data.experience.years >= 2 ? 'Years' : 'Year'} as a Developer
					</p>
				</div>
				<div className="profile__exp-item">
					<LiaProjectDiagramSolid />
					<p className="text-xs"> {data.experience.projects}+ Projects</p>
				</div>
			</div>
		</div>
	);
};
