/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios';
import { logError } from '../utils/utils';

const axiosInstance = axios.create({
	baseURL: 'https://api.github.com', // 원래는 .env에서 관리
});

// github token: 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

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
	if (!config.headers) {
		config.headers = {};
	}

	return config;
});

axiosInstance.interceptors.response.use(
	(res) => res,
	(error) => {
		logError(error);

		if (
			error?.response?.data &&
			!error.response.data.translate &&
			typeof error.response.data.message === 'object' &&
			error.response.data.message.length &&
			(error.response.data.message as string[]).find(
				(item) => item.indexOf('regular expression') > -1,
			)
		) {
			error.response.data.translate = '양식이 잘못되었습니다.';
		}

		logError(error);

		if (error.response.status === 500) {
			// window.location.href = '/error/500';
		}
		if (error.response.status === 503 || error.response.status === 502) {
			window.location.href = '/error/503';
		}
		if (error.response.status === 401) {
			window.location.href = '/error/404';
		}

		return Promise.reject(error);
	},
);

export default axiosInstance;
