import Piece from './Piece';
import BBishop from '../../assets/b_bishop.png';
import WBishop from '../../assets/w_bishop.png';

export default class Bishop extends Piece {
	constructor(player: number) {
		super(player, player === 1 ? WBishop : BBishop);
	}
}
