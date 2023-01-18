import { strings } from '../../../constants';
import { HOME_PATH, REPOSITORY_PATH } from '../../../routes/constants/urls';

export const headerList: {
	title: string;
	to: string;
}[] = [
	{ title: strings.HOME, to: HOME_PATH },
	{ title: strings.POST, to: REPOSITORY_PATH },
];
