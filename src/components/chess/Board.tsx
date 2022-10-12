import { FC, useState } from 'react';
import Square from './Square';

import styles from './chess.module.scss';
import { IBoard, ISquare } from '@board-types';
import { useDrop } from 'react-dnd';
import sendMove from '../../helpers/functions/sendMove';

const Board: FC<IBoard> = ({ data, change }) => {
	const [move, setMove] = useState(0);
	const [current, setCurrent] = useState([-1, -1]);
	const [target, setTarget] = useState(-1);

	const changeSelection = (pos: number, col: number, row: number) => {
		setTarget(pos);
		setCurrent([row, col]);
	};
	const transmitMove = (pos: number, col: number, row: number) => {
		setMove(pos);
		sendMove(current, [row, col]);
		setTarget(-1);
		setTimeout(() => change(), 500)
	};

	const squares = data?.map((x: ISquare) => {
		x.select = changeSelection;
		x.move = transmitMove;
		x.target = target;
		return <Square key={x.position} {...x} />;
	});

	const [{ isOver }, drop] = useDrop(() => ({
		accept: 'king' || 'queen' || 'knight' || 'rook' || 'pawn' || 'bishop',
		drop: (item) => console.log(move),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	}));

	return (
		<div className={styles['board__wrapper']}>
			<div className={styles['board__figures']} ref={drop}>
				{squares}
			</div>
			{isOver && (
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						height: '100%',
						width: '100%',
						zIndex: 1,
						opacity: 0.5,
						backgroundColor: 'yellow',
					}}
				/>
			)}
		</div>
	);
};

export default Board;
