import Image from 'next/image';
import styles from './ImageContainer.module.scss';

function ImageWrapper({
	props: {
		image: { url, alternativetext, width, height, caption },
		className,
		style,
	},
}) {
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

export default ImageWrapper;
