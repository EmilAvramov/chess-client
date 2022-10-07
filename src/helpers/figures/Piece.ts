export default class Piece {
	public player: number;
	public icon: string | null;

	constructor(player: number, icon: string) {
		this.player = player;
		this.icon = icon;
	}
}
