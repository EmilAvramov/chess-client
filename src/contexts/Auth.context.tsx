import { AuthChildren } from '@context-types';
import { IUserDetails } from '@user-types';
import { createContext, useContext, useState } from 'react';

const useValue = () => {
	const [auth, setAuth] = useState<boolean>(false);
	const [user, setUser] = useState<IUserDetails | null>(null);

	return { auth, setAuth, user, setUser };
};

const AuthContext = createContext({} as ReturnType<typeof useValue>);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthChildren> = ({ children }) => {
	const [auth, setAuth] = useState<boolean>(false);
	const [user, setUser] = useState<IUserDetails | null>(null);

	return (
		<AuthContext.Provider value={{ auth, setAuth, user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};
