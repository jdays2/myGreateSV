import { useEffect } from 'react';

export const useTitle = (title, dependencies = []) => {
	useEffect(() => {
		if (title) {
			document.title = `CV | ${title}`;
		}
	}, [title, ...dependencies]);
};
