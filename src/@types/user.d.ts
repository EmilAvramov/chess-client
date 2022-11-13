declare module '@user-types' {
	interface IUserRegister {
		name: string;
		email: string;
		password: string;
	}

	interface IUserResponse {
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

	interface IUserDetails {
		id: string;
		name: string;
		email: string;
		token: string;
	}
}
