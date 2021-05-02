import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Alert.module.scss';

const Alert = ({ severity, children }) => {
	let alertTitle = '';
	let icon = '';

	switch (severity) {
		case 'error':
			alertTitle = 'Error';
			icon = 'exclamation-triangle';
			break;

		case 'warning':
			alertTitle = 'Warning';
			icon = 'info-circle';
			break;

		case 'success':
			alertTitle = 'Success';
			icon = 'check-circle';
			break;

		default:
			alertTitle = 'Info';
			icon = 'info-circle';
			break;
	}

	return (
		<div className={styles[severity]}>
			<p className={styles.header}>
				<FontAwesomeIcon icon={['fas', icon]} className='marginRight' />
				{alertTitle}
			</p>
			{children}
		</div>
	);
};

Alert.propTypes = {
	severity: PropTypes.string.isRequired,
};

Alert.defaultProps = {
	severity: 'info',
};

export default Alert;
