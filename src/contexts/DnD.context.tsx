import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DnDChildren } from '../@types/Context';

export const DnDProvider: React.FC<DnDChildren> = ({ children }) => {
	return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
};
