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

	const endpoint = 'http://185.205.12.209:7777';

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
					.put('http://185.205.12.209:7777/figure/move', {
						'current pos': current,
						'target pos': target,
					})
					.then(() => {
						axios
							.get(endpoint)
							.then((res: any) => {
								setBoard(res);
								setLoading(true);
							})
							.catch((err: string) => {
								setLoading(true);
								setError(err);
							});
					});
			}
		};
		getData();
	}, [current, newGame, target]);

	return { board, loading, error, sendMove };
};

export default useChessData;
