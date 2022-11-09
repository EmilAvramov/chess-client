declare module '@types-socket' {
	interface ServerToClientEvents {
		broadcast: () => void;
		basicEmit: (a: number, b: string, c: Buffer) => void;
		withAck: (d: string, callback: (e: number) => void) => void;
	}

	interface ClientToServerEvents {
		message: (msg: string, user: string) => void;
		getMessages: () => message[];
	}

	interface InterServerEvents {
		ping: () => void;
	}

	interface SocketData {
		name: string;
		age: number;
	}
}