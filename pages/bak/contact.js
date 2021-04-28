import Head from 'next/head';
import Layout, { siteTitle } from '@/comp/layout/layout';
import renderContent from '@/utils/renderContent';

const Contact = ({
	data: {
		seo: { description },
		content,
		title,
	},
}) => {
	return (
		<Layout>
			<Head>
				<title>
					{siteTitle} - {title}
				</title>
				<meta name='description' content={description} />
			</Head>

			{content.map((item) => renderContent(item))}
		</Layout>
	);
};

// Get Contact Me data.
export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact`);
	const data = await res.json();

	return {
		props: {
			data,
		},
	};
}

export default Contact;
