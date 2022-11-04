import { AuthChildren } from '@context-types';
import { createContext, useContext, useState } from 'react';

const useValue = () => {
	const [auth, setAuth] = useState<boolean>(false);

	return { auth, setAuth };
};

const AuthContext = createContext({} as ReturnType<typeof useValue>);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthChildren> = ({ children }) => {
	const [auth, setAuth] = useState<boolean>(false);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};
