import { FC, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import Pawn from '../../helpers/figures/Pawn';
import Bishop from '../../helpers/figures/Bishop';
import Queen from '../../helpers/figures/Queen';
import King from '../../helpers/figures/King';
import Knight from '../../helpers/figures/Knight';
import Rook from '../../helpers/figures/Rook';

import styles from '../../styles/components/Chess.module.scss';

import { IBoardObject } from '@board-types';
import { IDropItem, ISquare } from '@chess-types';

const Square: FC<ISquare> = ({
	position,
	color,
	type,
	col,
	row,
	move,
	moves,
	highlight,
	toggle,
}): JSX.Element => {
	const [background, setBackground] = useState<string>('');

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
		return {
			type: pawns[color]?.[type] ? 'figure' : 'empty',
			item: { position, col, row, moves },
			collect: (monitor) => ({
				isDragging: !!monitor.isDragging(),
			}),
			end: () => toggle(0),
		};
	}, [move, toggle]);

	const [{ isOver, canDrop }, drop] = useDrop(() => ({
		accept: ['figure', 'empty'],
		drop: (item: IDropItem) => move([item.row, item.col], [row, col]),
		canDrop: (item: IDropItem) => {
			if (typeof item.moves !== 'number') {
				if (item.moves.includes(position)) {
					toggle(item.moves);
					return true;
				}
				return false;
			}
			return false;
		},
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
			canDrop: !!monitor.canDrop(),
		}),
	}));

	const attachRef = (el: HTMLDivElement) => {
		drop(el);
		drag(el);
	};

	const icon = (icon: string) => "url('" + icon + "')";

	return (
		<>
			{pawns[color] !== undefined ? (
				<div
					ref={attachRef}
					onMouseEnter={() => setBackground('green')}
					onDragStartCapture={() => setBackground('')}
					onMouseLeave={() => setBackground('')}
					className={
						!highlight
							? !isDragging
								? styles['square__icon']
								: `${styles['square__icon']} ${styles['square__icon_selected']}`
							: !isOver
							? `${styles['square__icon']} ${styles['square__icon_pending']}`
							: `${styles['square__icon']} ${styles['square__icon_take']}`
					}
					style={{
						backgroundImage: icon(pawns[color]?.[type].iconStyle),
						backgroundSize: '100% 100%',
						backgroundColor: background,
					}}
				/>
			) : (
				<div
					ref={drop}
					className={
						highlight
							? isOver
								? styles['square__icon_valid']
								: styles['square__icon_pending']
							: !isOver
							? styles['square__icon']
							: !canDrop
							? styles['square__icon_invalid']
							: styles['square__icon_valid']
					}
				/>
			)}
		</>
	);
};

export default Square;
