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
