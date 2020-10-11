import PropTypes from 'prop-types';
import styles from './Grid.module.scss';

const Grid = ({ element, columns, children }) => {
	let layoutGrid;
	switch (columns) {
		case 1:
			layoutGrid = 'layoutGrid__1';
			break;

		case 2:
			layoutGrid = 'layoutGrid__2';
			break;

		case 3:
			layoutGrid = 'layoutGrid__3';
			break;

		case 4:
			layoutGrid = 'layoutGrid__4';
			break;

		default:
			break;
	}

	return <div className={styles[layoutGrid]}>{children}</div>;
};

Grid.propTypes = {
	element: PropTypes.string,
	columns: PropTypes.number,
	rows: PropTypes.number,
	gap: PropTypes.number,
};

Grid.defaultProps = {
	element: 'div',
	columns: 1,
	gap: 1,
};
export default Grid;
