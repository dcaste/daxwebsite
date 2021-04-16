import Image from 'next/image';
import styles from './ImageContainer.module.scss';

function ImageWrapper({ props }) {
	return (
		<div className={styles[props.style]}>
			<Image
				src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${props.image.url}`}
				alt={props.image.alternativetext}
				width={props.image.width}
				height={props.image.height}
				className={props.className}
			/>
		</div>
	);
}

export default ImageWrapper;
