import styles from '../../styles/components/Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles['footer__wrapper']}>
			<div className={styles['footer__container']}>
				<div className={styles['footer__arrow']}>
					<i className='fa-solid fa-angles-up'></i>
				</div>
				<nav>
					<h6>Sitemap</h6>
					<ul className={styles['footer__list']}>
						<li>Home</li>
						<li>Chess</li>
						<li>FAQ</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
