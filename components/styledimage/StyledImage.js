import Image from 'next/image';

function StyledImage({ props }) {
	return (
		<>
			<Image
				src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${props.image.url}`}
				alt={props.image.alternativetext}
				width={props.image.width}
				height={props.image.height}
				className={props.style}
			/>
		</>
	);
}

export default StyledImage;
