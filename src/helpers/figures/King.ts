import Piece from './Piece';
import BKing from '../../assets/b_king.png';
import WKing from '../../assets/w_king.png';

export default class King extends Piece {
	constructor(player: number) {
		super(player, player === 1 ? WKing : BKing, 'king');
	}
}
