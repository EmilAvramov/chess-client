import { useEffect, useRef, useState } from 'react';

import ChatBody from './ChatBody.component';
import ChatFooter from './ChatFooter.component';

import { message } from '@chat-types';
import styles from '../../styles/components/Chat.module.scss';

const Chat: React.FC = (): JSX.Element => {
	const [messages, setMessages] = useState<message[]>([]);
	const lastRef = useRef<HTMLDivElement>(null);

	const storeMessage = (message: message) => {
		setMessages((messages) => [...messages, message]);
	};

	useEffect(() => {
		lastRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<div className={styles['chat__wrapper']}>
			<ChatBody messages={messages} messageRef={lastRef}/>
			<ChatFooter captureMessage={storeMessage} />
		</div>
	);
};

export default Chat;
