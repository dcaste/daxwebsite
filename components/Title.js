import React from 'react';

const Title = ({ Tag, titleBlack, titleRed, className }) => {
	return (
		<Tag className={className}>
			{titleBlack}
			{titleRed && <span className='textRed'> {titleRed}</span>}
		</Tag>
	);
};

export default Title;
