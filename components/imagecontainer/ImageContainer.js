import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './ImageContainer.module.scss';

function ImageContainer({
	props: {
		image: { url, alternativetext, width, height, caption },
		className,
		style,
	},
}) {
	style = style || 'default';

	const toBase64 = (str) =>
		typeof window === 'undefined'
			? Buffer.from(str).toString('base64')
			: window.btoa(str);
	return (
		<div className={styles[style]}>
			<Image
				src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`}
				alt={alternativetext}
				width={width}
				height={height}
				className={className}
			/>
			{caption && <p className={styles.caption}>{caption}</p>}
		</div>
	);
}

ImageContainer.propTypes = {
	style: PropTypes.string.isRequired,
};

ImageContainer.defaultProps = {
	style: 'default',
};

export default ImageContainer;
