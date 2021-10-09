import Link from 'next/link';
import styles from './NavMenu.module.scss';
import SVGIcon from '@/comp/svgicon/SVGIcon';

const NavMenu = ({
	navigation: { navLink },
	SocialMedia,
	personalInfo: { websiteURL },
}) => {
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

				{SocialMedia.map((item) => (
					<li className={styles.socialIcon} key={item.id}>
						<a href={item.url}>
							<SVGIcon icon={item.icon} />
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavMenu;
