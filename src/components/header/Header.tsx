import { NavLink } from 'react-router-dom';

import styles from '../../styles/components/Header.module.scss';

const Header = () => {
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
					<li className={styles['header__list_item']}>
						<NavLink
							to={'faq'}
							className={styles['header__list_nav']}
						>
							FAQ
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
