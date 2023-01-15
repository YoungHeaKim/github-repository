import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUser } from '../redux/slices/auth';

export default function useAuthActions() {
	const dispatch = useDispatch();

	const actions = useMemo(
		() =>
			bindActionCreators(
				{
					setUser,
				},
				dispatch,
			),
		[dispatch],
	);
	return { ...actions };
}
