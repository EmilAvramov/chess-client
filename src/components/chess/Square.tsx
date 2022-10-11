import { FC, useState } from 'react';
import { useDrag } from 'react-dnd';

import Pawn from '../../helpers/figures/Pawn';
import Bishop from '../../helpers/figures/Bishop';
import Queen from '../../helpers/figures/Queen';
import King from '../../helpers/figures/King';
import Knight from '../../helpers/figures/Knight';
import Rook from '../../helpers/figures/Rook';
import styles from './chess.module.scss';

import { ISquare, IBoardObject } from '@board-types';

const Square: FC<ISquare> = ({
	position,
	color,
	type,
	col,
	row,
	select,
	move,
	target,
}) => {
	const [selected, setSelected] = useState(false);

	const toggleSelected = () => setSelected((selected) => !selected);

	const pawns: IBoardObject = {
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

	const [{ isDragging }, drag] = useDrag(() => {
		if (pawns[color]?.[type]) {
			return {
				type: pawns[color]?.[type].name,
				collect: (monitor) => ({
					isDragging: !!monitor.isDragging(),
				}),
			};
		}
		return {
			type: 'empty',
			collect: (monitor) => ({
				isDragging: !!monitor.isDragging(),
			}),
		};
	});

	return (
		<>
			{pawns[color] !== undefined ? (
				<img
					ref={drag}
					className={
						!isDragging
							? styles['square__icon']
							: `${styles['square__icon']} ${styles['square__icon_selected']}`
					}
					src={pawns[color]?.[type].iconStyle}
					alt=''
					onMouseDown={() => {
						toggleSelected();
						select(position, col, row);
					}}
					onMouseUp={() => {
						toggleSelected();
						move(position, col, row);
					}}
				/>
			) : (
				<button
					className={styles['square__icon']}
					onMouseDown={() => {
						toggleSelected();
						select(position, col, row);
					}}
					onMouseUp={() => {
						if (target === position) {
							toggleSelected();
						}
						move(position, col, row);
					}}
				/>
			)}
		</>
	);
};

export default Square;
