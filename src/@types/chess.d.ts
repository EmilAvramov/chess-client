declare module '@chess-types' {
	export interface IChessData {
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
}
