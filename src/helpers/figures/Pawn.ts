import Piece from './Piece';
import BPawn from '../../assets/b_pawn.png';
import WPawn from '../../assets/w_pawn.png';

export default class Pawn extends Piece {
	constructor(player: number) {
		super(player, player === 1 ? WPawn : BPawn);
	}
}
