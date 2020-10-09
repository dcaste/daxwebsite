import PropTypes from 'prop-types';
import styles from './Image.module.scss';

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
		<picture className={styles.Image}>
			<source media='(max-width: 480px)' srcSet={src_sm} />
			<source media='(max-width: 768px)' srcSet={src_md} />
			<img
				src={src_lg}
				alt={alt}
				title={title}
				style={{ margin: `${margin}` }}
				className={styles[imgClass]}
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
	src_lg: '/assets/img/404.png',
	width: 'auto',
};

export default Image;
