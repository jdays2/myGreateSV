import React, { useState } from 'react';
import { IoMdLink } from 'react-icons/io';

export const CopyUrlBtn = () => {
	const [copied, setCopied] = useState(false);

	const copyUrlToClipboard = () => {
		const currentUrl = window.location.href;

		navigator.clipboard
			.writeText(currentUrl)
			.then(() => {
				setCopied(true);
			})
			.catch((err) => {
				console.error(err);
				setCopied(false);
			});
	};

	const btnText = copied ? 'Copied' : 'Copy link';

	return (
		<div className="copy-btn">
			<button
				onClick={copyUrlToClipboard}
				className="copy-btn__icon">
				<IoMdLink />
			</button>
			<span className="txt-sm copy-btn__txt">{btnText}</span>
		</div>
	);
};
