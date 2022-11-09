import { IUserDetails, IUserResponse } from '@user-types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { decode } from 'jsonwebtoken';
import { useEffect, useState } from 'react';
import { dataEndPoint } from '../helpers/misc/config';

export const useRegister = () => {
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [userData, setUserData] = useState<IUserDetails>();
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false)

	const provideDetails = (name: string, email: string, password: string) => {
		setEmail(email);
		setPassword(password);
		setName(name);
	};

	useEffect(() => {
		if (email && password && name) {
			setLoading(true)
			axios
				.post(`${dataEndPoint}/api/v1/users`, { name, email, password })
				.then((res: AxiosResponse) => {
					if (res.status === 201) {
						const decodedToken = decode(
							res.data.access_token
						) as IUserResponse;
						setUserData({
							id: decodedToken._id,
							name: decodedToken.name,
							email: decodedToken.email,
							token: res.data.access_token,
						});
						sessionStorage.setItem('id', JSON.stringify(decodedToken._id))
						sessionStorage.setItem('name', JSON.stringify(decodedToken.name));
						sessionStorage.setItem('email', JSON.stringify(decodedToken.email));
						sessionStorage.setItem('token', JSON.stringify(res.data.access_token));
						setLoading(false);
					}
				})
				.catch((err: AxiosError) => {
					console.log(err);
					if (err.response?.status === 409) {
						setError('Email already taken');
					} else if (
						err.response?.status === 400 ||
						err.response?.status === 500
					) {
						setError('Something went wrong, please try again');
					} else {
						setError(err.message);
					}
					setLoading(true)
				});
		}
	}, [email, name, password]);

	return { userData, provideDetails, error, loading };
};
