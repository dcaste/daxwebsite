import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavMobile.module.scss';

const NavMobile = ({ show, hide }) => {
	if (!show) return null;

	return (
		<>
			<div className={styles.overlay} />

			<nav className={styles.container}>
				<button onClick={hide} className={styles.close}>
					<FontAwesomeIcon icon={['fas', 'times']} />
				</button>

				<ul className={styles.nav}>
					<li>
						<Link href='/'>
							<a className={styles.item}>Home</a>
						</Link>
					</li>
					<li>
						<Link href='/portfolio'>
							<a className={styles.item}>Portfolio</a>
						</Link>
					</li>
					<li>
						<Link href='/about'>
							<a className={styles.item}>About Me</a>
						</Link>
					</li>
					<li>
						<Link href='/contact'>
							<a className={styles.item}>Contact Me</a>
						</Link>
					</li>
					<li className={styles.socialIcon}>
						<a
							href='https://www.linkedin.com/in/daxcastellonmeyrat/'
							className={styles.social}
						>
							<FontAwesomeIcon icon={['fab', 'linkedin']} />
						</a>
						<a href='https://github.com/dcaste/' className={styles.social}>
							<FontAwesomeIcon icon={['fab', 'github']} />
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavMobile;
