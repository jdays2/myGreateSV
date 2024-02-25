import React from 'react';
import { LuMail } from 'react-icons/lu';
import { FiPhone } from 'react-icons/fi';
import { RiSpeakLine } from 'react-icons/ri';
import { CopyUrlBtn } from './ui/CopyUrlBtn';
import { FaConnectdevelop } from 'react-icons/fa';
import { LiaProjectDiagramSolid } from 'react-icons/lia';

export const PersonalInfo = () => {
	return (
		<div className="profile">
			<CopyUrlBtn />
			<div className="profile__img">
				<img
					src="/public/img/png/sample-photo.png"
					alt="profile-img"
				/>
			</div>

			<div className="profile__box">
				<h2 className="profile__box-name txt-xl1">Mark Gorsharik</h2>

				<ul className="profile__contacts">
					<li className="profile__contacts-item">
						<LuMail className="profile__contacts-item-icon" />
						<p className="text-xs">markgorsharik@gmail.com</p>
					</li>

					<li className="profile__contacts-item">
						<FiPhone className="profile__contacts-item-icon" />
						<p className="text-xs">+375(33)686-27-74</p>
					</li>
				</ul>

				<div className="profile__lang-list">
					<RiSpeakLine className="profile__lang-list-icon" />
					<p className="text-xs">RU / ENG / BLR</p>
				</div>
			</div>

			<ul className="profile__stack">
				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">React</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">Redux</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">Axios</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">MongoDB</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">JS</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">TS</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">Node</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">Express</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">HTML</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">SaSS</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">Antd</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">Bootstrap</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">Tailwind</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">Webpack</span>
				</li>

				<li className="profile__stack-item">
					<span className="profile__stack-item-txt text-xs">Gulp</span>
				</li>
			</ul>

			<div className="profile__exp">
				<div className="profile__exp-item">
					<FaConnectdevelop />
					<p className="text-xs">1.5 Year as a Developer</p>
				</div>
				<div className="profile__exp-item">
					<LiaProjectDiagramSolid />
					<p className="text-xs"> 20+ Projects</p>
				</div>
			</div>
		</div>
	);
};
