declare module '@user-types' {
	export interface IUserRegister {
		name: string;
		email: string;
		password: string;
	}

	export interface IUserResponse {
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
		name: string;
		email: string;
		token: string;
	}
}
