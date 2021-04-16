import Head from 'next/head';
import Layout, { siteTitle } from '@/layout/layout';
import Link from 'next/link';

import ProjectHeader from '@/projectheader/ProjectHeader';
import renderContent from '../../utils/renderContent';
import { fetchAPI } from '../../utils/api';

const Project = ({
	project: { title, website, repository, featuredImage, seo, content },
}) => {
	return (
		<Layout>
			<Head>
				<title>
					{siteTitle} - My Role as web developr in {title} website
				</title>
				<meta name='description' content={seo.description} />
			</Head>

			<ProjectHeader
				title={title}
				featuredImage={featuredImage}
				website={website}
				repository={repository}
			/>

			{content.map((item) => renderContent(item))}

			<p>
				<Link href='/portfolio'>
					<a target='_self'>
						View a list of other selected projects in my Portfolio
					</a>
				</Link>
			</p>
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
