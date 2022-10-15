import { FC, useState } from 'react';

import { IChatFooter } from '@chat-types';
import styles from '../../styles/components/Chat.module.scss';

const ChatFooter: FC<IChatFooter> = ({ captureMessage }) => {
	const [message, setMessage] = useState<string>('');
	const [counter, setCounter] = useState<number>(0);
	const [user, setUser] = useState<string>('myself');

	const handleSendMessage = (e: any) => {
		e.preventDefault();
		setCounter((counter) => counter + 1);
		captureMessage({ id: counter, name: user, text: message });
		setMessage('');
	};
	return (
		<div className={styles['footer__wrapper']}>
			<form
				className={styles['footer__form']}
				onSubmit={handleSendMessage}
			>
				<input
					type='text'
					placeholder='Write message'
					className={styles['footer__message']}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button className={styles['footer__send']}>SEND</button>
			</form>
		</div>
	);
};

export default ChatFooter;
