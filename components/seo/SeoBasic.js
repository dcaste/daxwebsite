import { NextSeo } from 'next-seo';

function SeoBasic({ og, personal, slug }) {
	const title = og.title || 'Missing Title';
	const browserTitle =
		slug === ''
			? `${personal.websiteName} - ${og.description}`
			: `${title} - ${personal.websiteName}`;
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
				additionalLinkTags={[
					{
						rel: 'icon',
						href: '/assets/img/favicon.ico',
						sizes: '16x16',
					},
					{
						rel: 'icon',
						href: '/assets/img/favicon-16x16.png',
						sizes: '16x16',
					},
					{
						rel: 'icon',
						href: '/assets/img/favicon-32x32.png',
						sizes: '32x32',
					},
					{
						rel: 'icon',
						href: '/assets/img/android-chrome-512x512.png',
						sizes: '512x512',
					},
				]}
			/>
		</>
	);
}

export default SeoBasic;
