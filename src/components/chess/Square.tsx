import { FC } from 'react';
import { ISquare } from '../../interfaces/Chess.types';
import BRook from '../../assets/b_rook.png';
import BKnight from '../../assets/b_knight.png';
import BQueen from '../../assets/b_queen.png';
import BKing from '../../assets/b_king.png';
import BBishop from '../../assets/b_bishop.png';
import BPawn from '../../assets/b_pawn.png';
import WRook from '../../assets/w_rook.png';
import WKnight from '../../assets/w_knight.png';
import WQueen from '../../assets/w_queen.png';
import WKing from '../../assets/w_king.png';
import WBishop from '../../assets/w_bishop.png';
import WPawn from '../../assets/w_pawn.png';

const Square: FC<ISquare> = ({ position, color, type, col, row }) => {
	const pawns:any = {
		w: {
			pawn: WPawn,
			bishop: WBishop,
			king: WKing,
			queen: WQueen,
			knight: WKnight,
			rook: WRook,
		},
		b: {
			pawn: BPawn,
			bishop: BBishop,
			king: BKing,
			queen: BQueen,
			knight: BKnight,
			rook: BRook,
		},
		0: 0
	};

	return (
		<ul>
			<img src={pawns[color][type]} alt=''/>
		</ul>
	);
};

export default Square;
