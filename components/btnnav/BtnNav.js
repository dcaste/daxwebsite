import styles from './BtnNav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BtnNav = ({ show }) => {
	return (
		<button className={styles.btnNav} onClick={show}>
			<FontAwesomeIcon icon={'bars'} />
		</button>
	);
};

export default BtnNav;
