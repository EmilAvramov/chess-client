import axios from 'axios';
import { useEffect, useState } from 'react';
import { IChessData, IPiece } from '@hook-types';

const useChessData = () => {
	// API Data
	const [board, setBoard] = useState<IPiece[]>();
	const [game, setGame] = useState<string>('')
	const [end, setEnd] = useState<boolean>(false)
	
	// Helpers
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	// Hook operational
	const [newGame, setNewGame] = useState<boolean>(true);
	const [current, setCurrent] = useState<number[]>([-1, -1]);
	const [target, setTarget] = useState<number[]>([-1, -1]);
	

	const endpoint = 'https://chess-api-test.herokuapp.com';

	const sendMove = (current: number[], target: number[]) => {
		setCurrent(current);
		setTarget(target);
	};

	useEffect(() => {
		const getData = () => {
			setLoading(false);
			if (newGame) {
				axios
					.post(`${endpoint}/games`, {
						headers: {
							'content-type': 'application/json',
							accept: 'application/json',
						},
					})
					.then((res: IChessData) => {
						let board = res.data.pieces.map((x:IPiece) => {
							x.move = sendMove
							return x
						})
						setBoard(board);
						setGame(res.data.game.id)
						setEnd(res.data.game.isOver)
						setLoading(true);
					})
					.catch((err: string) => {
						setLoading(true);
						setError(err);
					});
				setNewGame(false);
			} else {
				axios
					.put(`${endpoint}/figure/move`, {
						'current pos': current,
						'target pos': target,
						'game id': game
					}).then((res: any) => {
						setBoard(res)
						setLoading(true)
					}).catch((err: string) => {
						setError(err)
						setLoading(true)
					})
			}
		};
		getData();
	}, [current, game, newGame, target]);

	return { board, end, loading, error };
};

export default useChessData;
