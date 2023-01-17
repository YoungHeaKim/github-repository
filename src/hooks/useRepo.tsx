import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/configStore';

export default function useAuth() {
	const repos = useSelector((state: RootState) => state.repo.repos);

	return {
		repos,
	};
}
