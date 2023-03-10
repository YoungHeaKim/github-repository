import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import reportWebVitals from './reportWebVitals';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { store } from './redux/store/configStore';
import theme from './styles/theme';

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

// eslint-disable-next-line import/prefer-default-export
export const persistor = persistStore(store);

root.render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<BrowserRouter>
						<Routes>
							<Route path="/*" element={<App />} />
						</Routes>
					</BrowserRouter>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</QueryClientProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
