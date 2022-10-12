import axios from 'axios';
import { IBoard } from '@board-types';
import { useEffect, useState } from 'react';

const useChessData = () => {
	const [board, setBoard] = useState<IBoard>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [trigger, setTrigger] = useState<boolean>(false);
	const [newGame, setNewGame] = useState<boolean>(true);

	const endpoint = 'https://chess-api-test.herokuapp.com'

	const changeTrigger = () => setTrigger(state => !state);

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
			}
		};
		getData();
	}, [newGame, trigger]);

	return { board, loading, error, changeTrigger };
};

export default useChessData;
