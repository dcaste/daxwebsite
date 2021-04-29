import Head from 'next/head';
import Layout, { siteTitle } from '@/comp/layout/layout';
import { fetchAPI } from '@/utils/api';
import renderContent from '@/utils/renderContent';

const DynamicPage = ({ page: { title, seo, content } }) => {
	const pageTitle = title === 'Homepage' ? seo.description : title;

	return (
		<Layout>
			<Head>
				<title>
					{siteTitle} - {pageTitle}
				</title>
				<meta name='description' content={seo.description} />
			</Head>
			{content.map((item) => renderContent(item))}
		</Layout>
	);
};

export async function getStaticPaths() {
	const pages = await fetchAPI('/pages');

	const paths = pages.map((page) => {
		const slugArray = page.slug;
		return {
			params: { slug: slugArray },
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params, preview = null }) {
	// To get the homepage, find the only page where slug is an empty string.
	const slug = params == {} || !params.slug ? '' : params.slug;

	const pages = await fetchAPI(`/pages?slug=${slug}`);

	if (pages == null) {
		return { props: {} };
	}

	return {
		props: { page: pages[0] },
		revalidate: 1,
	};
}

export default DynamicPage;
