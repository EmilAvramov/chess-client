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

	const storeMessage = (message: message) => {
		setMessages((messages) => [...messages, message]);
	};

	useEffect(() => {
		lastRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages]);

	return (
		<>
			{connected ? (
				<div className={styles['chat__wrapper']}>
					<ChatBody
						messages={messages}
						messageRef={lastRef}
						socket={socket}
						socketID={socketID}
						user={user}
					/>
					<ChatFooter captureMessage={storeMessage} socket={socket} />
				</div>
			) : (
				<div>Chat not connected</div>
			)}
		</>
	);
};

export default Chat;
