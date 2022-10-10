import Piece from './Piece';
import BRook from '../../assets/b_rook.png';
import WRook from '../../assets/w_rook.png';

export default class Rook extends Piece {
	constructor(player: number) {
		super(player, player === 1 ? WRook : BRook, 'rook');
	}
}
