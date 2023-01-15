import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ErrorPage from './pages/Error';
import { PUBLIC_ROUTES } from './routes';
import { ERROR_PATH, HOME_PATH } from './routes/constants/urls';

function App() {
	const navigate = useNavigate();
	const url = window.location.href;
	const pathName = new URL(url).pathname;

	useEffect(() => {
		const notFound = PUBLIC_ROUTES.find(({ path }) => path !== pathName);
		if (notFound === undefined) {
			navigate(ERROR_PATH);
		}
	}, [navigate, pathName]);

	return (
		<Routes>
			<Route path={HOME_PATH}>
				{/* Public Routes */}
				{PUBLIC_ROUTES.map(({ path, element }) => {
					return <Route key={path} path={path} element={element} />;
				})}
				<Route path="/*" element={<ErrorPage status={404} />} />
			</Route>
		</Routes>
	);
}

export default App;
