export default class Piece {
	public player: number;
	public iconStyle: string | undefined;
	public name: string;

	constructor(player: number, url: string, name: string) {
		this.player = player;
		this.iconStyle = url;
		this.name = name;
	}
}
