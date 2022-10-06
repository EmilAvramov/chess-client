export interface ISquare {
	position: number;
	type: string;
	color: string;
	'pos matrix': number[];
}

export interface IBoard {
	data: ISquare[] | undefined;
}
