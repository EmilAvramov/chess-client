import { Routes, Route } from 'react-router-dom';
import FAQ from '../components/faq/FAQ';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import Chess from '../components/chess/Chess';

import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Footer from '../components/footer/Footer';

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
