import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles['footer__wrapper']}>
			<div className={styles['footer__container']}>
				<p className={styles['footer__arrow']}>Back to Top</p>
				<ul className={styles['footer__list']}>
					<li>Contacts</li>
					<li>Support</li>
					<li>Placeholder</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
