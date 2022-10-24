import axios from 'axios';
import { IBoard } from '@board-types';
import { useEffect, useState } from 'react';

const useChessData = () => {
	const [board, setBoard] = useState<IBoard>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [newGame, setNewGame] = useState<boolean>(true);
	const [current, setCurrent] = useState<number[]>([-1, -1]);
	const [target, setTarget] = useState<number[]>([-1, -1]);
	const [game, setGame] = useState<string>('')

	const endpoint = 'https://chess-api-test.herokuapp.com';

	const sendMove = (current: number[], target: number[], id: string) => {
		setCurrent(current);
		setTarget(target);
		setGame(id)
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
					.then((res: any) => {
						setBoard(res);
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

	return { board, loading, error, sendMove };
};

export default useChessData;
