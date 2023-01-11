import React from 'react';
import { ERROR_PATH, HOME_PATH, POST_PATH } from './constants/urls';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/Home';
import PostPage from '../pages/Post';

// eslint-disable-next-line import/prefer-default-export
export const PUBLIC_ROUTES = [
	{
		path: `${HOME_PATH}`,
		element: <HomePage />,
	},
	{
		path: `${POST_PATH}`,
		element: <PostPage />,
	},
	{
		path: `${ERROR_PATH}/:status`,
		element: <ErrorPage />,
	},
];
