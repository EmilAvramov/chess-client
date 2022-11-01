import { hash, genSalt, compare } from 'bcryptjs';
import { saltRounds } from '../helpers/misc/config';

export const hashPassword = async (password: string) => {
	const salt = await genSalt(saltRounds);
	return await hash(password, salt);
};

export const matchPasswords = async (stored: string, current: string) => {
    return await compare(stored, current)
}