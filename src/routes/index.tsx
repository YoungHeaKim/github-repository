import React from 'react';
import {
	ERROR_PATH,
	HISTORY_PATH,
	HOME_PATH,
	ISSUE_PATH,
	REPOSITORY_PATH,
} from './constants/urls';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/Home';
import IssuePage from '../pages/Issue';
import RepositoryPage from '../pages/Repository';
import HistoryPage from '../pages/History';

// eslint-disable-next-line import/prefer-default-export
export const PUBLIC_ROUTES = [
	{
		path: `${HOME_PATH}`,
		element: <HomePage />,
	},
	{
		path: `${REPOSITORY_PATH}`,
		element: <RepositoryPage />,
	},
	{
		path: `${ISSUE_PATH}`,
		element: <IssuePage />,
	},
	{
		path: `${HISTORY_PATH}`,
		element: <HistoryPage />,
	},
	{
		path: `${ERROR_PATH}/:status`,
		element: <ErrorPage />,
	},
];
