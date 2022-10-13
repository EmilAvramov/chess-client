import useChessData from '../../hooks/useChessData';
import useSocket from '../../hooks/useSocket';
import Board from './Board';
import styles from './chess.module.scss';

const Chess: React.FC = (): JSX.Element => {
	// const { isConnected, lastPong, sendPing } = useSocket();
	const { board, changeTrigger, sendMove } = useChessData();

	return (
		<main className={styles['chess__wrapper']}>
			<Board data={board?.data} change={changeTrigger} move={sendMove}/>
			{/* <div>
				<p>Connected: {'' + isConnected}</p>
				<p>Last pong: {lastPong || '-'}</p>
				<button onClick={sendPing}>Send ping</button>
			</div> */}
		</main>
	);
};

export default Chess;
