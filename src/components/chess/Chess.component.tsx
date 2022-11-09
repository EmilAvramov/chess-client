import useChessData from '../../hooks/useChessData';
import useSocket from '../../hooks/useSocket';
import ChessBoard from './ChessBoard.component';
import Chat from '../chat/Chat.component';

import styles from '../../styles/components/Chess.module.scss';
import { useAuth } from '../../contexts/Auth.context';
import { useEffect } from 'react';

const Chess: React.FC = (): JSX.Element => {
	const { socket, isConnected, socketID } = useSocket();
	const { game, board, end } = useChessData();
	const { user } = useAuth();

	console.log(isConnected, socketID);
	useEffect(() => {
		socket?.on('connect', () => {
			socket?.emit('join', game);
		});
	}, [game, socket]);

	return (
		<main className={styles['chess__wrapper']}>
			<ChessBoard pieces={board} isOver={end} />
			<Chat
				socket={socket}
				socketID={socketID}
				connected={isConnected}
				user={user}
			/>
		</main>
	);
};

export default Chess;
