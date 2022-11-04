import { IUser } from '@user-types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { decode } from 'jsonwebtoken';
import { useEffect, useState } from 'react';
import { dataEndPoint } from '../helpers/misc/config';

export const useLogin = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [userData, setUserData] = useState<IUser>();
	const [error, setError] = useState<string>('');

	const provideDetails = (email: string, password: string) => {
		setEmail(email);
		setPassword(password);
	};

	useEffect(() => {
		if (email && password) {
			axios
				.post(`${dataEndPoint}/api/v1/login`, { email, password })
				.then((res: AxiosResponse) => {
					if (res.status === 200) {
						const decodedToken = decode(
							res.data.access_token
						) as IUser;
						setUserData(decodedToken);
					} else if (res.status === 401) {
						setError('Incorrect credentials');
					} else if (res.status === 400 || res.status === 500) {
						setError('Something went wrong, please try again');
					}
				})
				.catch((err: AxiosError) => {
					setError(err.message);
				});
		}
	}, [email, password]);

	return { userData, provideDetails, error };
};
