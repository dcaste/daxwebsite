import styles from './GoToTop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const GoToTop = ({ show }) => {
	if (!show) return null;

	return (
		<motion.a
			href='#mainWrapper'
			id='goToTop'
			className={styles.goToTop}
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0 }}
			transition={{ duration: 0.05 }}
		>
			<FontAwesomeIcon icon={'angle-up'} />
		</motion.a>
	);
};

export default GoToTop;
