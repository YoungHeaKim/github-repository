import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/configStore';

export default function useAuth() {
	const user = useSelector((state: RootState) => state.auth.user);

	return {
		user,
	};
}
