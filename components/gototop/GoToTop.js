import styles from './GoToTop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence } from 'framer-motion';

const GoToTop = ({ show }) => {
	return (
		<AnimatePresence>
			{show && (
				<motion.a
					href='#mainWrapper'
					id='goToTop'
					className={styles.button}
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
					transition={{ duration: 0.2 }}
				>
					<FontAwesomeIcon icon={'angle-up'} />
				</motion.a>
			)}
		</AnimatePresence>
	);
};

export default GoToTop;
