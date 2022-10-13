import axios from 'axios';
import { IBoard } from '@board-types';
import { useEffect, useState } from 'react';

const useChessData = () => {
	const [board, setBoard] = useState<IBoard>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [trigger, setTrigger] = useState<boolean>(false);
	const [newGame, setNewGame] = useState<boolean>(true);
	const [current, setCurrent] = useState<number[]>([-1, -1]);
	const [target, setTarget] = useState<number[]>([-1, -1]);

	const endpoint = 'http://185.205.12.209:7777';

	const changeTrigger = () => setTrigger((state) => !state);
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
						console.log(res);
						setBoard(res);
						setLoading(true);
					})
					.catch((err: string) => {
						console.log(err);
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
								console.log(res);
								setBoard(res);
								setLoading(true);
							})
							.catch((err: string) => {
								console.log(err);
								setLoading(true);
								setError(err);
							});
					});
			}
		};
		getData();
	}, [current, newGame, target, trigger]);

	return { board, loading, error, changeTrigger, sendMove };
};

export default useChessData;
