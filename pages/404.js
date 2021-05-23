import Layout from '@/comp/layout/layout';
import { NextSeo } from 'next-seo';

export default function Custom404({
	global: { personalInfo, navigation },
	slug,
}) {
	return (
		<Layout navigation={navigation}>
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
		</Layout>
	);
}
