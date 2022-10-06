import { FC } from 'react';
import { IBoard } from '../../interfaces/Chess.types';
import Square from './Square';

import styles from './chess.module.scss';

const Board: FC<IBoard> = ({ data }) => {
	const squares = data?.map((x: any) => <Square key={x.position} {...x} />);

	return (
		<div className={styles['board__wrapper']}>
			<div className={styles['board__figures']}>{squares}</div>
		</div>
	);
};

export default Board;
