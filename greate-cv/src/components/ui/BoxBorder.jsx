import React from 'react';

export const BoxBorder = ({ children, sticky }) => {
	return (
		<div className={`bar-box-border ${sticky ? `sticky` : ''}`}>{children}</div>
	);
};
