import { FC } from 'react';
import Square from './ChessSquare.component';

import styles from '../../styles/components/Chess.module.scss';
import { IBoard, ISquare } from '@board-types';

const ChessBoard: FC<IBoard> = ({ data, move, game }): JSX.Element => {
	const transmitMove = (target: number[], dest: number[]) => {
		move(target, dest, game);
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

export default ChessBoard;
