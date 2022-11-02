import { IUser } from '@user-types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { dataEndPoint } from '../helpers/misc/config';

export const useRegister = () => {
	const [email, setEmail] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [userData, setUserData] = useState<IUser>();

	const provideDetails = (name: string, email: string, password: string) => {
		setEmail(email);
		setPassword(password);
		setName(name);
	};

	useEffect(() => {
		if (email && password && name) {
			axios
				.post(`${dataEndPoint}/api/v1/users`, { name, email, password })
				.then((res: any) => {
					console.log(res.status);
					if (res.status === 201) {
						setUserData({ name, email, password });
					}
				})
				.catch((err: any) => {
					console.log(err);
				});
		}
	}, [email, name, password]);

	return { provideDetails, userData };
};
