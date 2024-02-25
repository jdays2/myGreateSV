import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import './styles/sass/_style.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />,
);
