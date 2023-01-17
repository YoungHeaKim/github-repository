import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearRepo, setRepo } from '../redux/slices/repo';

export default function useAuthActions() {
	const dispatch = useDispatch();

	const actions = useMemo(
		() =>
			bindActionCreators(
				{
					setRepo,
					clearRepo,
				},
				dispatch,
			),
		[dispatch],
	);
	return { ...actions };
}
