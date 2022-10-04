import { Routes, Route } from 'react-router-dom';
import About from './about/About';
import Login from './login/Login';
import Register from './register/Register';
import Chess from './chess/Chess';

import Footer from './footer/Footer';
import Header from './header/Header';
import Home from './home/Home';

const Router = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='chess' element={<Chess />}></Route>
				<Route path='about' element={<About />}></Route>
				<Route path='login' element={<Login />}></Route>
				<Route path='register' element={<Register />}></Route>
			</Routes>
			<Footer />
		</>
	);
};

export default Router;
