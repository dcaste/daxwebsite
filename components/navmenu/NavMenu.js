import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavMenu.module.scss';

const NavMenu = ({ navigation: { navLink, socialLink } }) => {
	const getLinkURL = (url) => {
		const linkURL = url ? `/${url}` : '/';
		return linkURL;
	};

	return (
		<nav className={styles.navMenu}>
			<Link
				href={{
					pathname: '/',
				}}
			>
				<a className={styles.logo}>
					<span className='textRed'>Dax</span>Castellón
				</a>
			</Link>

			<ul className={styles.navLinks}>
				{navLink.map((link) => (
					<li className={styles.navItem} key={link.id}>
						<Link
							href={{
								pathname: getLinkURL(link.url),
							}}
						>
							<a>{link.title}</a>
						</Link>
					</li>
				))}

				{socialLink.map((link) => (
					<li className={styles.socialIcon} key={link.id}>
						<a href={link.URL}>
							<FontAwesomeIcon icon={['fab', 'linkedin']} />
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavMenu;
