import React from 'react';
import { BiLogoTelegram } from 'react-icons/bi';
import { FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

export const SocialLink = ({ type, link }) => {
	const IconComponent = {
		telegram: BiLogoTelegram,
		linkedin: FaLinkedinIn,
		mail: IoMail,
		phone: FaPhone,
	}[type];

	const href =
		type === 'phone'
			? `tel:${link}`
			: type === 'mail'
			? `mailto:${link}`
			: link;

	if (!IconComponent) return null;

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer">
			<IconComponent className="social-link" />
		</a>
	);
};
