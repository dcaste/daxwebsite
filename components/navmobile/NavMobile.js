import Link from 'next/link';
import SVGIcon from '@/comp/svgicon/SVGIcon';
import styles from './NavMobile.module.scss';
import { motion, AnimatePresence, useIsPresent } from 'framer-motion';

const NavMobile = ({ toggle, open, navigation: { navLink }, SocialMedia }) => {
	const getLinkURL = (url) => {
		const linkURL = url ? `/${url}` : '/';
		return linkURL;
	};

	return (
		<AnimatePresence exitBeforeEnter>
			{open && (
				<motion.ul
					className={styles.nav}
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0 }}
					transition={{ duration: 0.25 }}
				>
					{navLink.map((link) => (
						<li key={link.id}>
							<Link
								href={{
									pathname: getLinkURL(link.url),
								}}
							>
								<a className={styles.item} onClick={toggle}>
									{link.title}
								</a>
							</Link>
						</li>
					))}
					<li>
						{SocialMedia.map((item) => (
							<a href={item.url} className={styles.social} key={item.id}>
								<SVGIcon icon={item.icon} />
							</a>
						))}
					</li>
				</motion.ul>
			)}
		</AnimatePresence>
	);
};

export default NavMobile;
