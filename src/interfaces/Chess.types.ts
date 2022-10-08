import Bishop from "../helpers/figures/Bishop";
import King from "../helpers/figures/King";
import Knight from "../helpers/figures/Knight";
import Pawn from "../helpers/figures/Pawn";
import Queen from "../helpers/figures/Queen";
import Rook from "../helpers/figures/Rook";

export interface ISquare {
	position: number;
	type: string | number;
	color: string | number;
	row: number;
	col: number;
}

export interface IBoard {
	data: ISquare[] | undefined;
}

export interface BoardObject {
	[key: string]: {
		[key: string]: Pawn | Bishop | Queen | King | Knight | Rook;
	};
}