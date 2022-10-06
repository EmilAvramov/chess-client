import axios from 'axios';
import { useEffect, useState } from 'react';

const useChessData = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const getData = () => {
		setLoading(false);
		axios
			.get('../board.json', {
				headers: {
					'content-type': 'application/json',
					accept: 'application/json',
				},
			})
			.then((res: any) => {
				console.log(res);
				setData(res);
				setLoading(true);
			})
			.catch((err: any) => {
				console.log(err);
				setLoading(true);
				setError(err);
			});
	};
	useEffect(() => {
		getData();
	}, []);

	return { data, loading, error };
};

export default useChessData;
