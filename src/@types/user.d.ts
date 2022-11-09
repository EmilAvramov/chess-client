declare module '@user-types' {
	export interface IUserRegister {
		name: string;
		email: string;
		password: string;
	}

	export interface IUserResponse {
		_id: string;
		fresh: boolean;
		iat: number;
		jti: string;
		type: string;
		sub: string;
		nbf: number;
		exp: number;
		name: string;
		email: string;
	}

	export interface IUserDetails {
		id: string;
		name: string;
		email: string;
		token: string;
	}
}
