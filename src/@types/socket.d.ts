declare module '@types-socket' {
	import { message } from '@chat-types';

	interface ServerToClientEvents {
		message: (message: message) => void;
		broadcast: () => void;
		basicEmit: (a: number, b: string, c: Buffer) => void;
		withAck: (d: string, callback: (e: number) => void) => void;
	}

	interface ClientToServerEvents {
		message: (msg: string, user: string, name: string) => void;
		getMessages: () => message[];
		join: (room: string) => void;
	}

	interface InterServerEvents {
		ping: () => void;
	}

	interface SocketData {
		name: string;
		age: number;
	}
}
