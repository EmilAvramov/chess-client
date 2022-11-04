import { AuthChildren } from '@context-types';
import { IUserDetails } from '@user-types';
import { createContext, useContext, useEffect, useState } from 'react';

const useValue = () => {
	const [currentUser, setCurrentUser] = useState<IUserDetails | null>(null);

	return { currentUser, setCurrentUser };
};

const AuthContext = createContext({} as ReturnType<typeof useValue>);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthChildren> = ({ children }) => {
	const [currentUser, setCurrentUser] = useState<IUserDetails | null>(null);

	useEffect(() => {
		if (currentUser) {
			sessionStorage.setItem('name', JSON.stringify(currentUser?.name));
			sessionStorage.setItem('email', JSON.stringify(currentUser?.email));
			sessionStorage.setItem('token', JSON.stringify(currentUser?.token));
		} else {
			sessionStorage.clear();
		}
	}, [
		currentUser,
		currentUser?.email,
		currentUser?.name,
		currentUser?.token,
	]);

	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
