import Head from 'next/head';
import Layout, { siteTitle } from '@/layout/layout';
import renderContent from '../utils/renderContent';

const Home = ({
	data: {
		seo: { description, excerpt },
		content,
	},
}) => {
	return (
		<Layout>
			<Head>
				<title>
					{siteTitle} - {excerpt}
				</title>
				<meta name='description' content={description} />
			</Head>

			{content.map((item) => renderContent(item))}
		</Layout>
	);
};

// Get Homepage data.
export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/homepage`);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}

export default Home;
