import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavMobile.module.scss';
import { motion, AnimatePresence, useIsPresent } from 'framer-motion';

const NavMobile = ({ open }) => {
	const isPresent = useIsPresent();

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
					<li>
						<a
							href='https://www.linkedin.com/in/daxcastellonmeyrat/'
							className={`${styles.item} ${styles.social}`}
						>
							<FontAwesomeIcon icon={['fab', 'linkedin']} />
						</a>
						<a
							href='https://github.com/dcaste/'
							className={`${styles.item} ${styles.social}`}
						>
							<FontAwesomeIcon icon={['fab', 'github']} />
						</a>
					</li>
				</motion.ul>
			)}
		</AnimatePresence>
	);
};

export default NavMobile;
