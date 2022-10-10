import React, { ReactNode } from 'react';
import { useContext } from 'react';
import { DndContext, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DnDChildren } from '../@types/Context';

const DnDContext = React.createContext(null);

// Setup consumer
export const useDnD = () => useContext(DndContext);

// Setup provider
export const DnDProvider: React.FC<DnDChildren> = ({ children }) => {
	return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
};
