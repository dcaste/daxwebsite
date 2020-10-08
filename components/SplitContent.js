import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SplitContent = (props) => {
	const { Tag, split, className, direction } = props;
	const splitClass = split !== undefined && `splitContent__${split}`;
	const splitDirection = direction === 'rl' && 'splitContent__RightToLeft';

	return (
		<Tag
			className={classNames(
				'splitContent',
				splitClass,
				splitDirection,
				className
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
