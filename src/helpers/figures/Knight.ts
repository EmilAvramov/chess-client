import Piece from './Piece';
import BKnight from '../../assets/b_knight.png';
import WKnight from '../../assets/w_knight.png';

export default class Knight extends Piece {
	constructor(player: number) {
		super(player, player === 1 ? WKnight : BKnight);
	}
}
