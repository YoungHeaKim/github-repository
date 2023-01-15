export const Commons = {
	IMAGE_SIZE_LIMIT: 1000000,
	TIMEOUT_LIMIT: 200000,
	REQUEST_LIMIT_DEFAULT: 25,
	REVIEW_REQUEST_LIMIT_DEFAULT: 10,
	BRANDS_REQUEST_LIMIT_DEFAULT: 30,
};

export const commonReactQueryOptions = {
	// refetchOnWindowFocus: false,
	refetchOnMount: true,
	refetchOnReconnect: false,
	retry: false,
};
