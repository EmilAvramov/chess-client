import { FC, useEffect, useRef, useState } from 'react';

import ChatBody from './ChatBody.component';
import ChatFooter from './ChatFooter.component';

import { IChat, message } from '@chat-types';
import styles from '../../styles/components/Chat.module.scss';

const Chat: FC<IChat> = ({
	connected,
	socket,
	socketID,
	user,
}): JSX.Element => {
	const [messages, setMessages] = useState<message[]>([]);
	const lastRef = useRef<HTMLDivElement>(null);

	if (connected) {
		console.log(`Connected with socket ID: ${socketID}`);
	} else {
		console.log('Chat not connected');
	}

	useEffect(() => {
		socket?.on('message', (message: message) =>
			setMessages([...messages, message])
		);
		lastRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages, socket]);

	return (
		<>
			{user ? (
				<div className={styles['chat__wrapper']}>
					<ChatBody
						messages={messages}
						messageRef={lastRef}
						user={user}
					/>
					<ChatFooter socket={socket} />
				</div>
			) : (
				<div>Chat not connected</div>
			)}
		</>
	);
};

export default Chat;
