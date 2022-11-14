import { FC, useState } from 'react';
import Square from './ChessSquare.component';

import styles from '../../styles/components/Chess.module.scss';
import { IPiece } from '@chess-types';
import { IBoard } from '@board-types';

const ChessBoard: FC<IBoard> = ({ pieces }): JSX.Element => {
	const [hightlights, setHighlights] = useState<number[]>([]);

	const toggleHighlight = (moves: number[] | number) => {
		if (typeof moves !== 'number') {
			setHighlights(moves);
		} else {
			setHighlights([])
		}
	};

	const squares = pieces?.map((x: IPiece) => {
		if (hightlights.includes(x.position)) {
			return (
				<Square
					key={x.position}
					highlight={true}
					toggle={(moves: number[] | number) =>
						toggleHighlight(moves)
					}
					{...x}
				/>
			);
		}
		return (
			<Square
				key={x.position}
				highlight={false}
				toggle={(moves: number[] | number) => toggleHighlight(moves)}
				{...x}
			/>
		);
	});

	return (
		<div className={styles['board__wrapper']}>
			<div className={styles['board__figures']}>{squares}</div>
		</div>
	);
};

export default ChessBoard;
