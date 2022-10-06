import Square from './Square';

const Board: React.FC = ({ data }): JSX.Element => {
	const squares = data.map((x: any) => <Square key={x.position} {...x} />);

	return <div className='board'>{squares}</div>;
};

export default Board;
