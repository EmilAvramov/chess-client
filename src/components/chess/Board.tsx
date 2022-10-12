import { FC } from 'react';
import Square from './Square';

import styles from './chess.module.scss';
import { IBoard, ISquare } from '@board-types';
import sendMove from '../../helpers/functions/sendMove';

const Board: FC<IBoard> = ({ data, change }) => {
	const transmitMove = (target: number[], dest: number[]) => {
		sendMove(target, dest);
		setTimeout(() => change(), 1000);
	};

	const squares = data?.map((x: ISquare) => {
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
