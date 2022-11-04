declare module '@context-types' {
	import { IUserDetails } from '@user-types';

	export interface DnDChildren {
		children: React.ReactNode;
	}

	export interface AuthChildren {
		user: IUserDetails;
		children: React.ReactNode;
	}
}
