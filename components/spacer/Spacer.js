import PropTypes from 'prop-types';
import styles from './Spacer.module.scss';

const Spacer = ({ height }) => {
	let spacerStyle;

	switch (height) {
		case 'simple':
			spacerStyle = 'spacer-simple';
			break;

		case 'double':
			spacerStyle = 'spacer-double';
			break;

		default:
			spacerStyle = 'spacer-simple';
			break;
	}

	return (
		<div className={styles[spacerStyle]}>
			<span></span>
		</div>
	);
};

Spacer.propTypes = {
	height: PropTypes.string,
};

Spacer.defaultProps = {
	height: 'simple',
};

export default Spacer;
