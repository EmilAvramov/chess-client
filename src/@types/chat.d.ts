declare module '@chat-types' {
	import { ClientToServerEvents, ServerToClientEvents } from '@types-socket';
	import { Socket } from 'socket.io-client';
	import { IUserDetails } from '@user-types';

	export interface message {
		id: number;
		name: string;
		text: string;
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
		socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
		socketID: string;
		user: IUserDetails | null;
	}

	export interface IChatFooter {
		captureMessage: (message: message) => void;
		socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
	}
}
