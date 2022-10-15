declare module '@chat-types' {
	export interface IChatBody {
		messages: string[];
	}

	export interface IChatFooter {
		captureMessage: (message:string) => void;
	}
}
