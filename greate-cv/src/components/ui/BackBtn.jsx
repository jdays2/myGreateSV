import React from 'react';
import { Link } from 'react-router-dom';
import { IoPlayBack } from 'react-icons/io5';
import { BoxBorderless } from './BoxBorderless';

export const BackBtn = ({ link }) => {
	return (
		<Link
			to={link}
			className="back-btn txt-neutral">
			<IoPlayBack />
			<span className='txt-sm'>Back</span>
		</Link>
	);
};
