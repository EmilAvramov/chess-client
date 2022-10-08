export default class Piece {
	public player: number;
	public iconStyle: string | undefined;

	constructor(player: number, url: string) {
		this.player = player;
		this.iconStyle = url;
	}
}
