declare module '@chat-types' {
	export interface message {
		id: number;
		name: string;
		text: string;
	}

	export interface IChatBody {
		messages: message[];
		messageRef: LegacyRef<HTMLDivElement>;
	}

	export interface IChatFooter {
		captureMessage: (message: message) => void;
	}
}
