import Square from './Square';

const Board = (data: any) => {
	const squares = data.map((x: any) => <Square key={x.position} {...x} />);

	return <div className='board'>{squares}</div>;
};

export default Board;
