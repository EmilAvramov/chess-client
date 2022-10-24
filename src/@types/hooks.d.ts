declare module '@hook-types' {
	export interface IChessData {
		data: {
			game: {
				id: string;
				isOver: boolean;
			};
			pieces: IPiece[];
		};
	}

    interface IPiece {
		position: number;
		type: string | number;
		color: string | number;
		target: number;
		row: number;
		col: number;
		moves: IMove[] | 0;
	}

	interface IMove {
		position: number;
		row: number;
		col: number;
	}
}
