import PropTypes from 'prop-types';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = ({
	alt,
	title,
	src_lg,
	src_md,
	src_sm,
	className,
	isRounded,
	width,
}) => {
	const imgClasses = className;
	const rounded = isRounded === true ? 'rounded' : null;

	return (
		<picture className={styles.Image}>
			<source media='(max-width: 480px)' srcSet={src_sm} />
			<source media='(max-width: 768px)' srcSet={src_md} />
			<img
				src={src_lg}
				alt={alt}
				title={title}
				className={styles[rounded]}
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
	width: PropTypes.string,
};

Image.defaultProps = {
	src_lg: '/assets/img/404.png',
	width: 'auto',
};

export default Image;
