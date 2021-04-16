import ErrorPage from 'next/error';
import Head from 'next/head';
import Layout, { siteTitle } from '@/layout/layout';
import renderContent from '../../utils/renderContent';
import { fetchAPI } from '../../utils/api';

const Project = ({ project: { title, website, repository, seo, content } }) => {
	console.log(title);

	return (
		<Layout>
			<Head>
				<title>
					{siteTitle} - Project: {title}
				</title>
				<meta name='description' content={seo.description} />
			</Head>

			{content.map((item) => renderContent(item))}
		</Layout>
	);
};

export async function getStaticPaths() {
	const projects = await fetchAPI('/projects');

	return {
		paths: projects.map((project) => ({
			params: {
				slug: project.slug,
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const projects = await fetchAPI(`/projects?slug=${params.slug}`);

	return {
		props: { project: projects[0] },
		revalidate: 1,
	};
}

export default Project;
