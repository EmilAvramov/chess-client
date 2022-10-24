import useChessData from '../../hooks/useChessData';
import useSocket from '../../hooks/useSocket';
import ChessBoard from './ChessBoard.component';
import Chat from '../chat/Chat.component';

import styles from '../../styles/components/Chess.module.scss';

const Chess: React.FC = (): JSX.Element => {
	const { isConnected, socketID } = useSocket();
	const { board, end } = useChessData();

	console.log(isConnected, socketID);

	return (
		<main className={styles['chess__wrapper']}>
			<ChessBoard
				pieces={board}
				isOver={end}
			/>
			<Chat socket={socketID} connected={isConnected} />
		</main>
	);
};

export default Chess;
