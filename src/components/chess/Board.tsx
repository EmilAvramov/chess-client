import { FC, useState } from 'react';
import { IBoard, ISquare } from '../../interfaces/Chess.types';
import Square from './Square';

import styles from './chess.module.scss';
import { boolean } from 'yup';

const Board: FC<IBoard> = ({ data }) => {
	const [selected, setSelected] = useState(0);
	const [move, setMove] = useState(0);
	const [shade, setShade] = useState(-1);

	const changeSelection = (pos: number) => {
		if (shade === -1) {
			setShade(pos);
		} else {
			setShade(-1);
		}
	};
	const transmitMove = (pos: number) => setMove(pos);

	const squares = data?.map((x: ISquare) => {
		x.select = changeSelection;
		x.move = transmitMove;
		x.shade = shade
		return <Square key={x.position} {...x} />;
	});

	return (
		<div className={styles['board__wrapper']}>
			<div className={styles['board__figures']}>{squares}</div>
		</div>
	);
};

export default Board;
