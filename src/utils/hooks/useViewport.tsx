import { useCallback, useState } from 'react';

type ViewportType = 'sm' | 'md' | 'lg' | 'xl';

export const useViewport = () => {
	const [viewport, setViewport] = useState<ViewportType>('sm');

	const handleViewportChange = useCallback(() => {
		const width = window.innerWidth;

		if (width < 480) setViewport('sm');
		else if (width < 768) setViewport('md');
		else if (width < 1024) setViewport('lg');
		else setViewport('xl');
	}, []);

	return { handleViewportChange, viewport };
};
