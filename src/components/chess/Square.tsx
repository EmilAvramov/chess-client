import { FC, useState } from 'react';
import { BoardObject, ISquare } from '../../interfaces/Chess.types';

import Pawn from '../../helpers/figures/Pawn';
import Bishop from '../../helpers/figures/Bishop';
import Queen from '../../helpers/figures/Queen';
import King from '../../helpers/figures/King';
import Knight from '../../helpers/figures/Knight';
import Rook from '../../helpers/figures/Rook';
import styles from './chess.module.scss';

const Square: FC<ISquare> = ({
	position,
	color,
	type,
	col,
	row,
	select,
	move,
	shade,
}) => {
	const [selected, setSelected] = useState(false);

	const toggleSelected = () => setSelected((selected) => !selected);

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
		0: undefined,
	};

	return (
		<>
			{pawns[color] !== undefined ? (
				<button
					className={
						!selected
							? styles['square__icon']
							: `${styles['square__icon']} ${styles['square__icon_selected']}`
					}
					style={
						shade !== position
							? {
									backgroundImage:
										"url('" +
										pawns[color]?.[type].iconStyle +
										"')",
							  }
							: {
									backgroundColor: 'lightblue',
									backgroundImage:
										"url('" +
										pawns[color]?.[type].iconStyle +
										"')",
							  }
					}
					onMouseDown={() => {
						toggleSelected();
						select(position, col, row);
					}}
					onMouseUp={() => move(position, col, row)}
				/>
			) : (
				<button
					className={
						!selected
							? styles['square__icon']
							: `${styles['square__icon']} ${styles['square__icon_selected']}`
					}
					onMouseDown={() => {
						toggleSelected();
						select(position, col, row);
					}}
					onMouseUp={() => move(position, col, row)}
				/>
			)}
		</>
	);
};

export default Square;
