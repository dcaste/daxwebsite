import PropTypes from 'prop-types';
import styles from './Grid.module.scss';
import classNames from 'classnames';

const Grid = ({ tag, columns, children, className }) => {
	const Tag = tag;
	let layoutGrid = '';

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
			layoutGrid = 'layoutGrid__1';
			break;
	}

	return (
		<Tag className={classNames(styles[layoutGrid], className)}>{children}</Tag>
	);
};

Grid.propTypes = {
	tag: PropTypes.string,
	columns: PropTypes.number,
	gap: PropTypes.number,
};

Grid.defaultProps = {
	tag: 'div',
	columns: 1,
	gap: 1,
};
export default Grid;
