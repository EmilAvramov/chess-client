import { FC } from 'react';
import { IBoard } from '../../interfaces/Chess.types';
import Square from './Square';

const Board: FC<IBoard> = ({ data }) => {
	const squares = data?.map((x: any) => <Square key={x.position} {...x} />);

	return <div className='board'>{squares}</div>;
};

export default Board;
