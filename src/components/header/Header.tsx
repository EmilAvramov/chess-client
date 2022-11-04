import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth.context';

import styles from '../../styles/components/Header.module.scss';

const Header = () => {
	const { auth, setAuth } = useAuth();

	console.log(auth);

	return (
		<header className={styles['header__wrapper']}>
			<nav>
				<ul className={styles['header__list']}>
					<li className={styles['header__list_item']}>
						<NavLink
							to={'/'}
							className={styles['header__list_nav']}
						>
							Home
						</NavLink>
					</li>
					<li className={styles['header__list_item']}>
						<NavLink
							to={'chess'}
							className={styles['header__list_nav']}
						>
							Chess
						</NavLink>
					</li>
					<li className={styles['header__list_item']}>
						<NavLink
							to={'faq'}
							className={styles['header__list_nav']}
						>
							FAQ
						</NavLink>
					</li>
					{!auth && (
						<>
							<li className={styles['header__list_item']}>
								<NavLink
									to={'login'}
									className={styles['header__list_nav']}
								>
									Login
								</NavLink>
							</li>
							<li className={styles['header__list_item']}>
								<NavLink
									to={'register'}
									className={styles['header__list_nav']}
								>
									Register
								</NavLink>
							</li>
						</>
					)}
					{auth && (
						<>
							<li className={styles['header__list_item']}>
								<NavLink
									to={'/'}
									className={styles['header__list_nav']}
									onClick={() => {
										setAuth(false);
										sessionStorage.clear();
									}}
								>
									Logout
								</NavLink>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
