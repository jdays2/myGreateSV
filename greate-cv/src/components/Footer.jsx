import React from 'react';
import { BoxBorderless } from './ui/BoxBorderless';

export const Footer = () => {
	return (
		<BoxBorderless>
			<div className="footer">
				<span className="footer__year">© 2024</span>
				<p className="footer__dev">JDayS</p>
			</div>
		</BoxBorderless>
	);
};
