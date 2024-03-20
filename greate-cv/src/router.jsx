import { createBrowserRouter } from 'react-router-dom';

import { Login } from './screens/Login';
import { HomePage } from './screens/HomePage';
import { MainContainer } from './components/ui/MainContainer';
import { ProjectDetails } from './screens/ProjectDetails';
import { Registration } from './screens/Registration';

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
	{ element: <Login />, path: '/login' },
	{ element: <Registration />, path: '/registration' },
]);
