import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './screens/HomePage';
import { MainContainer } from './components/ui/MainContainer';
import { ProjectDetails } from './screens/ProjectDetails';

export const router = createBrowserRouter([
	{
		element: <MainContainer />,
		path: '/',
		children: [
			{ element: <HomePage />, index: true },
			{ element: <HomePage />, path: 'home' },
			{ element: <ProjectDetails />, path: 'project/:id' },
		],
	},
]);
