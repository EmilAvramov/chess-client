import { hash, genSalt, compare, decodeBase64, encodeBase64 } from 'bcryptjs';
import { saltRounds } from '../helpers/misc/config';

export const hashPassword = async (password: string) => {
	const salt = await genSalt(saltRounds);
	const encode = encodeBase64([1, 3, 5, 7, 1, 2, 34, 2], 1);
	console.log(encode);
	const decode = decodeBase64(encode, saltRounds);
	console.log(decode);
	return await hash(password, salt);
};

export const matchPasswords = async (stored: string, current: string) => {
	return await compare(stored, current);
};
