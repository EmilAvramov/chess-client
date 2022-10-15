import useSocket from '../../hooks/useSocket';
import ChatBody from './ChatBody.component';
import ChatFooter from './ChatFooter.component';

import styles from '../../styles/components/Chat.module.scss';

const Chat = () => {
	const { isConnected, lastPong, sendPing } = useSocket();

	return (
		<div className={styles['chat__wrapper']}>
			<ChatBody />
			<ChatFooter />
		</div>
	);
};

export default Chat;
