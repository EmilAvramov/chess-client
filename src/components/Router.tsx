import { Routes, Route } from 'react-router-dom';
import FAQ from './faq/FAQ';
import Login from './login/Login';
import Register from './register/Register';
import Chess from './chess/Chess.component';

import Header from './header/Header';
import Home from './home/Home';
import Footer from './footer/Footer';

const Router = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='chess' element={<Chess />}></Route>
				<Route path='faq' element={<FAQ />}></Route>
				<Route path='login' element={<Login />}></Route>
				<Route path='register' element={<Register />}></Route>
			</Routes>
			<Footer />
		</>
	);
};

export default Router;
