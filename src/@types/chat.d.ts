declare module '@chat-types' {
	import { ClientToServerEvents, ServerToClientEvents } from '@types-socket';
	import { Socket } from 'socket.io-client';
	import { IUserDetails } from '@user-types';

	interface message {
		id: string;
		user: string;
		name: string;
		message: string;
		time: number;
	}

	interface IChat {
		socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
		socketID: string;
		connected: boolean;
		user: IUserDetails | null;
	}

	interface IChatBody {
		messages: message[];
		messageRef: LegacyRef<HTMLDivElement>;
		user: IUserDetails | null;
	}

	interface IChatFooter {
		socket: Socket<ServerToClientEvents, ClientToServerEvents> | undefined;
	}
}
