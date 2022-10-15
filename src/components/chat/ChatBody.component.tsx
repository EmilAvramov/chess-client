import { useNavigate } from 'react-router-dom';

import styles from '../../styles/components/Chat.module.scss';

const ChatBody = () => {
	const navigate = useNavigate();

	const handleLeaveChat = () => {
		navigate('/');
	};

	return (
		<>
			<header className={styles['body__header']}>
				<p>Connected on chat with USERNAME</p>
				<button
					className={styles['body__header_leave']}
					onClick={handleLeaveChat}
				>
					LEAVE CHAT
				</button>
			</header>

			<div className={styles['body__container']}>
				<div className={styles['body__container_message']}>
					<p className={styles['message__sender']}>You</p>
					<div className={styles['message__content']}>
						<p>Hello there</p>
					</div>
				</div>

				<div className={styles['body__container_message']}>
					<p>Other</p>
					<div className={styles['message__recipient']}>
						<p>Hey, I'm good, you?</p>
					</div>
				</div>

				<div className={styles['message__status']}>
					<p>Someone is typing...</p>
				</div>
			</div>
		</>
	);
};

export default ChatBody;
