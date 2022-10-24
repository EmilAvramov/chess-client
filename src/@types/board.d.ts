declare module '@board-types' {
	import Bishop from '../helpers/figures/Bishop';
	import King from '../helpers/figures/King';
	import Knight from '../helpers/figures/Knight';
	import Pawn from '../helpers/figures/Pawn';
	import Queen from '../helpers/figures/Queen';
	import Rook from '../helpers/figures/Rook';

	interface IMove {
		position: number,
		row: number,
		col: number
	}

	export interface ISquare {
		move: (target:number[], dest: number[]) => void;
		position: number;
		type: string | number;
		color: string | number;
		target: number;
		row: number;
		col: number;
		moves: IMove[] | 0
	}

	export interface IBoard {
		data: {
			game: {
				id: string,
				isOver: boolean
			}
			pieces: ISquare[] | undefined;
		}
		move: (current: number[], target: number[], id: string) => void
	}

	export interface IBoardObject {
		[key: string | number]:
			| {
					[key: string]: Pawn | Bishop | Queen | King | Knight | Rook;
			  }
			| undefined;
	}
}
