import useSocket from '../../hooks/useSocket';
import ChatBody from './ChatBody.component';
import ChatFooter from './ChatFooter.component';
import ChatBar from './ChatSideBar.component';

const Chat = () => {
	const { isConnected, lastPong, sendPing } = useSocket();

	return (
		<div className='chat'>
			<ChatBar />
			<div className='chat__main'>
				<ChatBody />
				<ChatFooter />
			</div>
		</div>
	);
};

export default Chat;
