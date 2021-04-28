import Head from 'next/head';
import Layout, { siteTitle } from '@/comp/layout/layout';
import { fetchAPI } from '@/utils/api';
import renderContent from '@/utils/renderContent';

const DynamicPage = ({ page: { title, seo, content } }) => {
	return (
		<Layout>
			<Head>
				<title>
					{siteTitle} - {title}
				</title>
				<meta name='description' content={seo.description} />
			</Head>
			{content.map((item) => renderContent(item))}
		</Layout>
	);
};

export async function getStaticPaths() {
	const pages = await fetchAPI('/pages');

	return {
		paths: pages.map((page) => ({
			params: { slug: [page.slug] },
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params, preview = null }) {
	const pages = await fetchAPI(`/pages?slug=${params.slug}`);

	if (pages == null) {
		return { props: {} };
	}

	return {
		props: { page: pages[0] },
		revalidate: 1,
	};
}

export default DynamicPage;
