import Layout from '@/comp/layout/layout';
import { fetchAPI, getSlugs } from '@/utils/api';
import SeoBasic from '@/comp/seo/SeoBasic';
import SeoSocialMedia from '@/comp/seo/SeoSocialMedia';
import renderContent from '@/utils/renderContent';

const DynamicPage = ({
	page: { content, openGraph },
	global: { personalInfo },
	slug,
}) => {
	return (
		<Layout>
			{openGraph && (
				<SeoBasic personal={personalInfo} og={openGraph} slug={slug} />
			)}
			{content.map((item) => renderContent(item))}
		</Layout>
	);
};

export async function getStaticPaths() {
	const pages = await fetchAPI('/pages');

	// True returns an Array, False returns a string.
	const pathURLs = await getSlugs(pages, true);

	return {
		paths: pathURLs,
		fallback: false,
	};
}

export async function getStaticProps({ params, preview = null }) {
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
