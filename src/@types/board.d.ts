declare module '@board-types' {
	import { IPiece } from "@hook-types";
	import Bishop from '../helpers/figures/Bishop';
	import King from '../helpers/figures/King';
	import Knight from '../helpers/figures/Knight';
	import Pawn from '../helpers/figures/Pawn';
	import Queen from '../helpers/figures/Queen';
	import Rook from '../helpers/figures/Rook';

	interface IBoard {
		pieces: IPiece[] | undefined,
		isOver: boolean
	}

	interface IBoardObject {
		[key: string | number]:
			| {
					[key: string]: Pawn | Bishop | Queen | King | Knight | Rook;
			  }
			| undefined;
	}
}
