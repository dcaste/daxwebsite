import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Alert.module.scss';

const Alert = ({ severity, children }) => {
	let alertSeverity = '';
	let alertTitle = '';
	let icon = '';

	switch (severity) {
		case 'error':
			alertSeverity = 'alertError';
			alertTitle = 'Error';
			icon = 'exclamation-triangle';
			break;

		case 'warning':
			alertSeverity = 'alertWarning';
			alertTitle = 'Warning';
			icon = 'info-circle';
			break;

		case 'success':
			alertSeverity = 'alertSuccess';
			alertTitle = 'Success';
			icon = 'check-circle';
			break;

		default:
			alertSeverity = 'alertInfo';
			alertTitle = 'Info';
			icon = 'info-circle';
			break;
	}

	return (
		<div className={styles[alertSeverity]}>
			<p>
				<strong>
					<FontAwesomeIcon icon={['fas', icon]} className='marginRight' />
					{alertTitle}
				</strong>
			</p>
			{children}
		</div>
	);
};

Alert.propTypes = {
	severity: PropTypes.string,
};

Alert.defaultProps = {
	severity: 'info',
};

export default Alert;
