import React from 'react';
import classNames from 'classnames';

const ContentBlock = (props) => {
	const { order, className } = props;
	const classOrder =
		order === 'second' ? 'orderMobileSecond' : 'orderMobileFirst';

	return (
		<div className={classNames(className, classOrder)}>{props.children}</div>
	);
};

export default ContentBlock;
