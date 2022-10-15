declare module '@chat-types' {
	export interface message {
		id: number;
		name: string;
		text: string;
	}

	export interface IChatBody {
		messages: message[];
	}

	export interface IChatFooter {
		captureMessage: (message: message) => void;
	}
}
