import Layout from '@/comp/layout/layout';
import { fetchAPI, getSlugs, getStrapiURL } from '@/utils/api';
import SeoBasic from '@/comp/seo/SeoBasic';
import SeoSocialMedia from '@/comp/seo/SeoSocialMedia';
import renderContent from '@/utils/renderContent';

const DynamicPage = ({
	page: { content, openGraph },
	globalData: { personalInfo, navigation, SocialMedia },
	slug,
}) => {
	return (
		<Layout
			navigation={navigation}
			SocialMedia={SocialMedia}
			personalInfo={personalInfo}
		>
			{openGraph && (
				<SeoBasic personal={personalInfo} og={openGraph} slug={slug} />
			)}

			<SeoSocialMedia SocialMedia={SocialMedia} personalInfo={personalInfo} />

			{content.map((item) => renderContent(item))}
		</Layout>
	);
};

export async function getStaticPaths() {
	const response = await fetch(getStrapiURL('/pages'));
	const pages = await fetchAPI('/pages');

	// Get the paths we want to pre-render based on posts.
	const paths = pages.map((page) => ({
		params: { slug: [page.slug] },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	// To get the homepage, find the only page where slug is an empty string.
	const slug = params === {} || !params.slug ? '' : params.slug;
	const pages = await fetchAPI(`/pages?slug=${slug}`);

	if (pages === null) {
		return { props: {} };
	}

	return {
		props: { page: pages[0], slug },
		revalidate: 1,
	};
}

export default DynamicPage;
