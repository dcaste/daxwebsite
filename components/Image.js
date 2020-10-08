import React from 'react';
import PropTypes from 'prop-types';
import img404 from './../assets/img/404.png';

const Image = ({
	alt,
	title,
	src_lg,
	src_md,
	src_sm,
	margin,
	imgClass,
	width,
}) => {
	return (
		<picture className='image'>
			<source media='(max-width: 480px)' srcSet={src_sm} />
			<source media='(max-width: 768px)' srcSet={src_md} />
			<img
				src={src_lg}
				alt={alt}
				title={title}
				style={{ margin: `${margin}` }}
				className={imgClass}
				width={width}
				loading='lazy'
			/>
		</picture>
	);
};

Image.propTypes = {
	alt: PropTypes.string.isRequired,
	title: PropTypes.string,
	src_lg: PropTypes.string.isRequired,
	src_md: PropTypes.string,
	src_sm: PropTypes.string,
	imgClass: PropTypes.string,
	margin: PropTypes.string,
	width: PropTypes.string,
};

Image.defaultProps = {
	src_lg: img404,
	width: 'auto',
};

export default Image;
