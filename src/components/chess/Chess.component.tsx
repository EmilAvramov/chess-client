import useChessData from '../../hooks/useChessData';
import useSocket from '../../hooks/useSocket';
import Board from './Board.component';
import Chat from '../chat/Chat.component';
import styles from './styles.module.scss';

const Chess: React.FC = (): JSX.Element => {
	// const { isConnected, lastPong, sendPing } = useSocket();
	const { board, sendMove } = useChessData();

	return (
		<main className={styles['chess__wrapper']}>
			<Board data={board?.data} move={sendMove}/>
			<Chat/>
		</main>
	);
};

export default Chess;
