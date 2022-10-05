import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const useSocket = () => {
	const socket = io();
	const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
	const [lastPong, setLastPong] = useState<string>('');

	useEffect(() => {
		socket.on('connect', () => {
			setIsConnected(true);
		});

		socket.on('disconnect', () => {
			setIsConnected(false);
		});

		socket.on('pong', () => {
			setLastPong(new Date().toISOString());
		});

		return () => {
			socket.off('connect');
			socket.off('disconnect');
			socket.off('pong');
		};
	}, [socket]);

    const sendPing = () => {
        socket.emit('ping');
      }

	return { isConnected, lastPong, sendPing };
};

export default useSocket;
