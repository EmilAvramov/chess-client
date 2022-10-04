import { NavLink } from 'react-router-dom';
import styles from './header.module.scss'

const Header = () => {
	return (
		<header className={styles['header__wrapper']}>
			<ul className={styles['header__list']}>
				<li><NavLink to={'/'}>Home</NavLink></li>
				<li><NavLink to={'chess'}>Chess</NavLink></li>
				<li><NavLink to={'login'}>Login</NavLink></li>
				<li><NavLink to={'register'}>Register</NavLink></li>
				<li><NavLink to={'about'}>About</NavLink></li>
			</ul>
		</header>
	);
};

export default Header;
