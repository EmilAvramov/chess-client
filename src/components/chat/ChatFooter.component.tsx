import { FC, useState } from 'react';

import { IChatFooter } from '@chat-types';
import styles from '../../styles/components/Chat.module.scss';
import { useAuth } from '../../contexts/Auth.context';

const ChatFooter: FC<IChatFooter> = ({ socket }): JSX.Element => {
	const [message, setMessage] = useState<string>('');

	const { user } = useAuth();

	const handleSendMessage = (e: any) => {
		e.preventDefault();
		socket?.emit('message', message, user!.id, user!.name);
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
