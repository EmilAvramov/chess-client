import { ProtectedRouteProps } from '@context-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth.context';

export const Protected: React.FC<ProtectedRouteProps> = ({ children }) => {
	const { auth } = useAuth();
	if (auth) {
		return children;
	}
	return <Navigate to='/login' replace />;
};
