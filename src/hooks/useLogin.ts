import { IUser } from '@user-types';
import axios from 'axios';
import { decode } from 'jsonwebtoken';
import { useEffect, useState } from 'react';
import { dataEndPoint } from '../helpers/misc/config';

export const useLogin = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [userData, setUserData] = useState<IUser>();

	const provideDetails = (email: string, password: string) => {
		setEmail(email);
		setPassword(password);
	};

	useEffect(() => {
		if (email && password) {
			axios
				.post(`${dataEndPoint}/api/v1/login`, { email, password })
				.then((res: any) => {
					console.log(res.data.access_token);
					const decodedToken = decode(res.data.access_token) as IUser;
					setUserData(decodedToken);
					console.log(decodedToken);
				});
		}
	}, [email, password]);

	return { provideDetails, userData };
};
