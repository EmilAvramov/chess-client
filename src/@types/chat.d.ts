declare module '@chat-types' {
	export interface message {
		id: number;
		name: string;
		text: string;
	}

	export interface IChat {
		socket: string;
		connected: boolean;
	}

	export interface IChatBody {
		messages: message[];
		messageRef: LegacyRef<HTMLDivElement>;
		socket: string;
	}

	export interface IChatFooter {
		captureMessage: (message: message) => void;
		socket: string;
	}
}
