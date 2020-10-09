import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './splitContent.module.scss';

const SplitContent = (props) => {
	const { Tag, split, direction } = props;
	const splitClass = split !== undefined && `splitContent__${split}`;
	const splitDirection = direction === 'rl' && 'splitContent__RightToLeft';

	return (
		<Tag
			className={classNames(
				styles.splitContent,
				styles[splitClass],
				styles[splitDirection]
			)}
		>
			{props.children}
		</Tag>
	);
};

SplitContent.propTypes = {
	Tag: PropTypes.string,
	split: PropTypes.string,
	direction: PropTypes.string,
};

SplitContent.defaultProps = {
	Tag: 'div',
	direction: 'lr', //Left to Right
};

export default SplitContent;
