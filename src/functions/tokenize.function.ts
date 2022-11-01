import { sign, decode } from 'jsonwebtoken';

export const createToken = (email: string, name: string, password: string) => {
	const payload = {
		email,
		name,
		password,
	};
	const token = sign(payload, process.env.REACT_APP_SECRET as string);
	return token;
};

export const decodeToken = (token: string) => decode(token);
