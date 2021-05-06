import { NextSeo } from 'next-seo';

function SeoBasic({ og, personal, slug }) {
	const browserTitle =
		slug === ''
			? `${personal.websiteName} - ${og.description}`
			: `${og.title} - ${personal.websiteName}`;
	const pageURL = `${personal.websiteURL}/${slug}`;
	const imageURL = `${personal.websiteURL}${og.picture.url}`;

	return (
		<>
			<NextSeo
				title={browserTitle}
				description={og.description}
				openGraph={{
					type: og.type,
					url: pageURL,
					title: browserTitle,
					description: og.description,
					images: [
						{
							url: imageURL,
							width: og.picture.width,
							height: og.picture.height,
							alt: og.picture.alternativeText,
						},
					],
				}}
			/>
		</>
	);
}

export default SeoBasic;
