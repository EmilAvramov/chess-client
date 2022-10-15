import { FC } from 'react';
import Square from './Square.component';

import styles from './styles.module.scss';
import { IBoard, ISquare } from '@board-types';

const Board: FC<IBoard> = ({ data, move }) => {
	const transmitMove = (target: number[], dest: number[]) => {
		move(target, dest);
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
