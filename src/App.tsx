import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import { DnDProvider } from './contexts/DnD.context';

const App = () => {
	return (
		<BrowserRouter>
			<DnDProvider>
				<Router />
			</DnDProvider>
		</BrowserRouter>
	);
};

export default App;
