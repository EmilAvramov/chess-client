import axios from 'axios';
import { useEffect, useState } from 'react';
import { IBoard } from '../interfaces/Chess.types';

const useChessData = () => {
	const [board, setBoard] = useState<IBoard>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const getData = () => {
			setLoading(false);
			axios
				.get('board.json', {
					headers: {
						'content-type': 'application/json',
						accept: 'application/json',
					},
				})
				.then((res: IBoard) => {
					console.log(res);
					setBoard(res);
					setLoading(true);
				})
				.catch((err: string) => {
					console.log(err);
					setLoading(true);
					setError(err);
				});
		};
		getData();
	}, []);

	return { board, loading, error };
};

export default useChessData;
