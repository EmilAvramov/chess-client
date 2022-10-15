import { useState } from 'react';

import ChatBody from './ChatBody.component';
import ChatFooter from './ChatFooter.component';

import useSocket from '../../hooks/useSocket';

import { message } from '@chat-types';
import styles from '../../styles/components/Chat.module.scss';

const Chat: React.FC = (): JSX.Element => {
	// const { isConnected, lastPong, sendPing } = useSocket();
	const [messages, setMessages] = useState<message[]>([]);

	const storeMessage = (message: message) => {
		setMessages((messages) => [...messages, message]);
	};

	return (
		<div className={styles['chat__wrapper']}>
			<ChatBody messages={messages} />
			<ChatFooter captureMessage={storeMessage} />
		</div>
	);
};

export default Chat;
