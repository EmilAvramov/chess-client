import axios from 'axios';

const sendMove = (current: number[], target: number[]) => {
	axios
		.put('https://chess-api-test.herokuapp.com/figure/move', {
			'current pos': current,
			'target pos': target,
		})
		.then((res) => console.log(res))
		.catch((err: any) => console.log(err));
};

export default sendMove;
