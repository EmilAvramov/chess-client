import useSocket from '../../hooks/useSocket';
import ChatBody from './ChatBody.component';
import ChatFooter from './ChatFooter.component';

import styles from '../../styles/components/Chat.module.scss';
import { useState } from 'react';

const Chat: React.FC = (): JSX.Element => {
	const { isConnected, lastPong, sendPing } = useSocket();
	const [messages, setMessages] = useState([]);

	const storeMessage = (message: string) => {
		setMessages((messages) => ({ ...messages, message }));
	};

	return (
		<div className={styles['chat__wrapper']}>
			<ChatBody messages={messages} />
			<ChatFooter captureMessage={storeMessage}/>
		</div>
	);
};

export default Chat;
