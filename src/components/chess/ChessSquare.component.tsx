import { FC, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import Pawn from '../../helpers/figures/Pawn';
import Bishop from '../../helpers/figures/Bishop';
import Queen from '../../helpers/figures/Queen';
import King from '../../helpers/figures/King';
import Knight from '../../helpers/figures/Knight';
import Rook from '../../helpers/figures/Rook';

import styles from '../../styles/components/Chess.module.scss';

import { ISquare, IBoardObject } from '@board-types';

const Square: FC<ISquare> = ({ position, color, type, col, row, move }) => {
	const [background, setBackground] = useState('');

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
				type: 'figure',
				item: { pos: position, col, row },
				collect: (monitor) => ({
					isDragging: !!monitor.isDragging(),
				}),
			};
		}
		return {
			type: 'empty',
			item: { pos: position, col, row },
			collect: (monitor) => ({
				isDragging: !!monitor.isDragging(),
			}),
		};
	});

	const [{ isOver }, drop] = useDrop(() => ({
		accept: ['figure', 'empty'],
		drop: (item: any) => {
			move([item.row, item.col], [row, col]);
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	const attachRef = (el: HTMLDivElement) => {
		drop(el);
		drag(el);
	};

	return (
		<>
			{pawns[color] !== undefined ? (
				<div
					ref={attachRef}
					onMouseEnter={() => setBackground('green')}
					onDragStartCapture={() => setBackground('')}
					onMouseLeave={() => setBackground('')}
					className={
						!isDragging
							? styles['square__icon']
							: `${styles['square__icon']} ${styles['square__icon_selected']}`
					}
					style={{
						backgroundImage:
							"url('" + pawns[color]?.[type].iconStyle + "')",
						backgroundSize: '100% 100%',
						backgroundColor: background,
					}}
				/>
			) : (
				<div
					ref={drop}
					className={
						!isOver
							? styles['square__icon']
							: `${styles['square__icon']} ${styles['square__icon_target']}`
					}
				/>
			)}
		</>
	);
};

export default Square;
