import React from 'react';
import { BiLogoTelegram } from 'react-icons/bi';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { FaPhone } from "react-icons/fa6";

export const SocialLink = ({ type }) => {
	const isTelegram = type === 'telegram';
	const isLinked = type === 'linkedin';
	const isMail = type === 'mail';
	const isPhone = type === 'phone';

	return (
		<>
			{isTelegram && (
				<a
					href="https://t.me/Marchezko"
					target="_blank">
					<BiLogoTelegram className="social-link" />
				</a>
			)}

			{isPhone && (
				<a
					href="tel:375336862774">
					<FaPhone className="social-link" />
				</a>
			)}
			{isLinked && (
				<a
					href="https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%BA-%D0%B3%D0%BE%D1%80%D1%89%D0%B0%D1%80%D0%B8%D0%BA-4a626a273/"
					target="_blank">
					<FaLinkedinIn className="social-link" />
				</a>
			)}
			{isMail && (
				<a
					href="mailto:markgorsharik@gmail.com"
					target="_blank">
					<IoMail className="social-link" />
				</a>
			)}
		</>
	);
};
