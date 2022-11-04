import { AuthChildren } from '@context-types';
import { IUserDetails } from '@user-types';
import { createContext, useContext, useEffect, useState } from 'react';

const useValue = () => {
	const [currentUser, setCurrentUser] = useState<IUserDetails | null>(null);

	return { currentUser, setCurrentUser };
};

const AuthContext = createContext({} as ReturnType<typeof useValue>);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthChildren> = ({ user, children }) => {
	const [currentUser, setCurrentUser] = useState<IUserDetails | null>(user);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		if (currentUser) {
			setLoading(true);
			sessionStorage.setItem('name', JSON.stringify(currentUser?.name));
			sessionStorage.setItem('email', JSON.stringify(currentUser?.email));
			sessionStorage.setItem('token', JSON.stringify(currentUser?.token));
			setLoading(false);
		} else {
			setLoading(true);
			sessionStorage.clear();
			setLoading(false);
		}
	}, [
		currentUser,
		currentUser?.email,
		currentUser?.name,
		currentUser?.token,
	]);

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
