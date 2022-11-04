declare module '@chat-types' {
	import { IUserDetails } from '@user-types';

	export interface message {
		id: number;
		name: string;
		text: string;
	}

	export interface IChat {
		socket: string;
		connected: boolean;
		user: IUserDetails | null;
	}

	export interface IChatBody {
		messages: message[];
		messageRef: LegacyRef<HTMLDivElement>;
		socket: string;
		user: IUserDetails | null;
	}

	export interface IChatFooter {
		captureMessage: (message: message) => void;
		socket: string;
	}
}
