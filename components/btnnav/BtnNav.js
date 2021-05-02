import styles from './BtnNav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BtnNav = ({ open, toggle }) => {
	return (
		<button className={styles.btnNav} onClick={toggle}>
			{open ? (
				<FontAwesomeIcon icon={'times'} />
			) : (
				<FontAwesomeIcon icon={'bars'} />
			)}
		</button>
	);
};

export default BtnNav;
