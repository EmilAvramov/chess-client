import { FC, useState } from 'react';
import Square from './Square';

import styles from './chess.module.scss';
import { IBoard, ISquare } from '@board-types';
import sendMove from '../../helpers/functions/sendMove';

const Board: FC<IBoard> = ({ data, change }) => {
	const [current, setCurrent] = useState([-1, -1]);

	const changeSelection = (pos: number, col: number, row: number) => {
		console.log(col, row)
		setCurrent([row, col]);
		console.log(current)
	};
	const transmitMove = (pos: number, col: number, row: number) => {
		console.log(current);
		sendMove(current, [row, col]);

		setTimeout(() => change(), 1000);
	};

	const squares = data?.map((x: ISquare) => {
		x.select = changeSelection;
		x.move = transmitMove;
		return <Square key={x.position} {...x} />;
	});

	return (
		<div className={styles['board__wrapper']}>
			<div className={styles['board__figures']}>{squares}</div>
		</div>
	);
};

export default Board;
