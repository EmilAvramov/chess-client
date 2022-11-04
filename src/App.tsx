import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import { AuthProvider } from './contexts/Auth.context';
import { DnDProvider } from './contexts/DnD.context';

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<DnDProvider>
					<Router />
				</DnDProvider>
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;
