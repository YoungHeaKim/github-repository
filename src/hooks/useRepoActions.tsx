import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
	clearRepo,
	setHistoryRepo,
	setRepo,
	setSearch,
} from '../redux/slices/repo';

export default function useAuthActions() {
	const dispatch = useDispatch();

	const actions = useMemo(
		() =>
			bindActionCreators(
				{
					setSearch,
					setRepo,
					clearRepo,
					setHistoryRepo,
				},
				dispatch,
			),
		[dispatch],
	);
	return { ...actions };
}
