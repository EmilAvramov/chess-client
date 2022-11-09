declare module '@chat-types' {
	import { ClientToServerEvents, ServerToClientEvents } from '@types-socket';
	import { Socket } from 'socket.io-client';
	import { IUserDetails } from '@user-types';

	export interface message {
		id: string;
		user: string;
		message: string;
		time: number;
	}

	export interface IChat {
		socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
		socketID: string;
		connected: boolean;
		user: IUserDetails | null;
	}

	export interface IChatBody {
		messages: message[];
		messageRef: LegacyRef<HTMLDivElement>;
		user: IUserDetails | null;
	}

	export interface IChatFooter {
		socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
	}
}
