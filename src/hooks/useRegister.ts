import { IUser } from '@user-types';
import axios from 'axios';
import { decode } from 'jsonwebtoken';
import { useEffect, useState } from 'react';

export const useRegister = () => {
	const [token, setToken] = useState<string>('');
	const [userData, setUserData] = useState<IUser>();

	const provideToken = (token: string) => {
		setToken(token);
	};

	useEffect(() => {
		axios
			.post('endpoint', {
				headers: {
					'content-type': 'application/json',
					'X-Authorization': token,
				},
			})
			.then((res: any) => {
				console.log(res.data);
				if (res.data.token) {
					const userDetails = decode(res.data.token) as IUser;
					setUserData(userDetails);
				} else {
					throw Error('no token received!');
				}
			})
			.catch((err: any) => {
				console.log(err);
			});
	}, [token]);

	return { provideToken, userData };
};
