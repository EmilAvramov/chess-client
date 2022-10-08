import { FC } from 'react';
import { BoardObject, ISquare } from '../../interfaces/Chess.types';

import Pawn from '../../helpers/figures/Pawn';
import Bishop from '../../helpers/figures/Bishop';
import Queen from '../../helpers/figures/Queen';
import King from '../../helpers/figures/King';
import Knight from '../../helpers/figures/Knight';
import Rook from '../../helpers/figures/Rook';
import styles from './chess.module.scss';

const Square: FC<ISquare> = ({ position, color, type, col, row }) => {
	const pawns: BoardObject = {
		w: {
			pawn: new Pawn(1),
			bishop: new Bishop(1),
			king: new King(1),
			queen: new Queen(1),
			knight: new Knight(1),
			rook: new Rook(1),
		},
		b: {
			pawn: new Pawn(2),
			bishop: new Bishop(2),
			king: new King(2),
			queen: new Queen(2),
			knight: new Knight(2),
			rook: new Rook(2),
		},
	};

	return (
		<>
			{color ? (
				<img
					className={styles['square__icon']}
					src={pawns[color][type].iconStyle}
					alt=''
				/>
			) : (
				<img
					className={styles['square__icon']}
					src={pawns[color][type].iconStyle}
					alt=''
				/>
			)}
		</>
	);
};

export default Square;
