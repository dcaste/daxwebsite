import styles from './Btn.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoToTop = () => {
	return (
		<a href='#mainWrapper' id='goToTop' className={styles.goToTop}>
			<FontAwesomeIcon icon={'angle-up'} />
		</a>
	);
};

export default GoToTop;
