import { IUser } from '@user-types';
import axios from 'axios';
import { decode } from 'jsonwebtoken';
import { useEffect, useState } from 'react';
import { hashPassword } from '../functions/hasher.function';
import { userEndPoint } from '../helpers/misc/config';

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
			const hashedPassword = hashPassword(password);
			axios
				.post(
					`${userEndPoint}/api/v1/login`,
					{ email, password: hashedPassword },
					{
						headers: {
							'content-type': 'application/json',
						},
					}
				)
				.then((res: any) => {
					console.log(res.data.token)
					const decodedToken = decode(res.data.token) as IUser;
					setUserData(decodedToken);
					console.log(decodedToken)
				});
		}
	}, [email, password]);

	return { provideDetails, userData };
};
