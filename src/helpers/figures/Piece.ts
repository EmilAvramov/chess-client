export default class Piece {
	public player: number;
	public iconStyle: string | null;

	constructor(player: number, url: string) {
		this.player = player;
		this.iconStyle = url;
	}
}
