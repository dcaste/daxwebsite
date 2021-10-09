import PropTypes from 'prop-types';
import SVGIcon from '@/comp/svgicon/SVGIcon';
import styles from './Alert.module.scss';

const Alert = ({ severity, children }) => {
	let alertTitle = '';
	let icon = '';

	switch (severity) {
		case 'error':
			alertTitle = 'Error';
			icon = 'Exclamation';
			break;

		case 'warning':
			alertTitle = 'Warning';
			icon = 'Info';
			break;

		case 'success':
			alertTitle = 'Success';
			icon = 'Check';
			break;

		default:
			alertTitle = 'Information';
			icon = 'Info';
			break;
	}

	return (
		<div className={styles[severity]}>
			<p className={styles.header}>
				<SVGIcon icon={icon} className='marginRight' />
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
