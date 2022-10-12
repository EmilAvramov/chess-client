declare module '@board-types' {
	import Bishop from '../helpers/figures/Bishop';
	import King from '../helpers/figures/King';
	import Knight from '../helpers/figures/Knight';
	import Pawn from '../helpers/figures/Pawn';
	import Queen from '../helpers/figures/Queen';
	import Rook from '../helpers/figures/Rook';

	export interface ISquare {
		select: (pos: number, col: number, row: number) => void;
		move: (pos: number, col: number, row: number) => void;
		position: number;
		type: string | number;
		color: string | number;
		target: number;
		row: number;
		col: number;
	}

	export interface IBoard {
		data: ISquare[] | undefined;
		change: () => void
	}

	export interface IBoardObject {
		[key: string | number]:
			| {
					[key: string]: Pawn | Bishop | Queen | King | Knight | Rook;
			  }
			| undefined;
	}
}
