import { NextSeo } from 'next-seo';
import Layout, { siteTitle } from '@/comp/layout/layout';
import { fetchAPI, getSlugs } from '@/utils/api';
import renderContent from '@/utils/renderContent';

const DynamicPage = ({ page: { title, seo, content } }) => {
	const pageTitle = title === 'Homepage' ? seo.description : title;

	return (
		<Layout>
			<NextSeo title={siteTitle} description={seo.description} />
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
		props: { page: pages[0] },
		revalidate: 1,
	};
}

export default DynamicPage;
