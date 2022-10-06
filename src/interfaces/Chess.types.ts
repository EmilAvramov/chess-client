export type Square = {
	position: number;
	type: string;
	color: string;
	'pos matrix': number[];
};

export type Board = {
	data: Square[];
};
