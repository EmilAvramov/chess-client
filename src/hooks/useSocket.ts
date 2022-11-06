import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { socketEndPoint } from '../helpers/misc/config';
import { ClientToServerEvents, ServerToClientEvents } from '@types-socket';

const useSocket = () => {
	const [isConnected, setIsConnected] = useState<boolean>(false);
	const [socketID, setSocketID] = useState('');
	const [socket, setSocket] =
		useState<Socket<ServerToClientEvents, ClientToServerEvents>>();

	useEffect(() => {
		const socket = io(socketEndPoint);

		socket.on('connect', () => {
			console.log('connected');
			socket.emit('getMessages');
		});

		socket.on('socket_id', (id: string) => {
			setSocketID(id);
			setIsConnected(true);
		});

		socket.on('disconnect', () => {
			setIsConnected(false);
		});

		socket.on('error', (error) => {
			console.log(error);
		});

		socket.on('ping', () => console.log('pinged'));

		setSocket(socket);

		return () => {
			socket.off('connect');
			socket.off('socket_id');
			socket.off('disconnect');
		};
	}, []);

	return { socket, isConnected, socketID };
};

export default useSocket;
