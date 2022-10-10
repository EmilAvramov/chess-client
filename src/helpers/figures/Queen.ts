import Piece from './Piece';
import BQueen from '../../assets/b_queen.png';
import WQueen from '../../assets/w_queen.png';

export default class Queen extends Piece {
	constructor(player: number) {
		super(player, player === 1 ? WQueen : BQueen, 'queen');
	}
}
