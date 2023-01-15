import { useCallback, useState } from 'react';
import _ from 'lodash';

export default function useDebounce(
	obj = '',
	wait = 500,
): [string, (text: string) => void] {
	const [state, setState] = useState<string>(obj);
	const setDebouncedState = (_value: string) => {
		// eslint-disable-next-line no-use-before-define
		debounce(_value);
	};
	const debounce = useCallback(
		_.debounce((_prop: string) => {
			// Todo: unmount 됐을 때 setState를 못하도록 처리 필요 (memory leak 원인)
			setState(_prop);
		}, wait),
		[],
	);
	return [state, setDebouncedState];
}
