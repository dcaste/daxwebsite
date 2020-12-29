import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavMenu.module.scss';

const navMenu = () => {
	return (
		<nav className={styles.navMenu}>
			<Link href='/'>
				<a className={styles.logo}>
					<span className='textRed'>Dax</span>Castellón
				</a>
			</Link>
			<ul className={styles.navLinks}>
				<li className={styles.navItem}>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li className={styles.navItem}>
					<Link href='/portfolio'>
						<a>Portfolio</a>
					</Link>
				</li>
				<li className={styles.navItem}>
					<Link href='/about'>
						<a>About Me</a>
					</Link>
				</li>
				<li className={styles.navItem}>
					<Link href='/contact'>
						<a>Contact Me</a>
					</Link>
				</li>
				<li className={styles.socialIcon}>
					<a href='https://www.linkedin.com/in/daxcastellonmeyrat/'>
						<FontAwesomeIcon icon={['fab', 'linkedin']} />
					</a>
				</li>
				<li className={styles.socialIcon}>
					<a href='https://github.com/dcaste/'>
						<FontAwesomeIcon icon={['fab', 'github']} />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default navMenu;
