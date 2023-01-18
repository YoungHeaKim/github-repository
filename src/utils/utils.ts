export const logError = (message: string | unknown) => {
	console.error(message);
};

export const logger = (message: unknown) => {
	console.log(message);
};

export const formatComma = (number?: number | string) => {
	return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') ?? '';
};

export const formatDate = (value: string) => {
	return `${new Date(value).getFullYear()}년
	${new Date(value).getMonth() + 1}월
	${new Date(value).getDay() + 1}일`;
};
