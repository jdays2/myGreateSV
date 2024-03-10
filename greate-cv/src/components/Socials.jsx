import React from 'react';
import { SocialLink } from './ui/SocialLink';

export const Socials = ({ socials }) => {
	return (
		<div className="socials">
			{socials.map((link) => {
				return (
					<SocialLink
						key={link.type}
						type={link.type}
						link={link.data}
					/>
				);
			})}
		</div>
	);
};
