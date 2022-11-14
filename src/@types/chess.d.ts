declare module '@chess-types' {
	interface IChessData {
		data: [
			{
				game: [
					{
						id: string;
						isOver: boolean;
					}
				];
			},
			{
				pieces: IPiece[];
			}
		];
	}

	interface IPiece {
		position: number;
		type: string | number;
		color: string | number;
		target: number;
		row: number;
		col: number;
		moves: number[] | number;
		move: (target: number[], dest: number[]) => void;
	}

	interface ISquare extends IPiece {
		highlight: boolean;
		toggle: (moves: number[] | number) => void;
	}

	interface IDropItem {
		position: number;
		row: number;
		col: number;
		moves: number[] | number;
	}
}
