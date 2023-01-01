import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/Error';
import { PUBLIC_ROUTES } from './routes';
import { HOME_PATH } from './routes/constants/urls';

function App() {
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
