import Layout from '@/comp/layout/layout';
import { NextSeo } from 'next-seo';
import CenteredContent from '@/comp/centeredcontent/CenteredContent';

export default function Custom404({
	globalData: { SocialMedia, navigation, personalInfo },
}) {
	const props = {
		content: `It seems the page you are looking for doesn't exists or perhaps has been moved. Please use the Navigation menu to find the information you need.`,
		alignment: 'center',
		style: 'lead',
	};
	return (
		<Layout
			navigation={navigation}
			SocialMedia={SocialMedia}
			personalInfo={personalInfo}
		>
			<NextSeo
				title='404 - Page Not Found'
				noindex={true}
				nofollow={true}
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
			<h1 className='pageTitle'>404 - Page Not Found</h1>
			<CenteredContent props={props} />
		</Layout>
	);
}
