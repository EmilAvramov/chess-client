import { FC } from 'react';
import Square from './ChessSquare.component';

import styles from '../../styles/components/Chess.module.scss';
import { IPiece } from '@hook-types';
import { IBoard } from '@board-types';

const ChessBoard: FC<IBoard> = ({ pieces }): JSX.Element => {

	const squares = pieces?.map((x: IPiece) => (
		<Square key={x.position} {...x} />
	));

	return (
		<div className={styles['board__wrapper']}>
			<div className={styles['board__figures']}>{squares}</div>
		</div>
	);
};

export default ChessBoard;
