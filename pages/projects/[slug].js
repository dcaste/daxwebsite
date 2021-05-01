import Head from 'next/head';
import Layout, { siteTitle } from '@/comp/layout/layout';

import ProjectHeader from '@/comp/projectheader/ProjectHeader';
import ProjectCard from '@/comp/projectcard/ProjectCard';
import renderContent from '@/utils/renderContent';
import ProperLink from '@/comp/properlink/ProperLink';
import { fetchAPI, getSlugs } from '@/utils/api';

const Project = ({
	project: {
		title,
		website,
		repository,
		featuredImage,
		seo,
		content,
		projectDescription,
		technologies,
		position,
	},
}) => {
	return (
		<Layout>
			<Head>
				<title>
					{siteTitle} - My Role as web developer in {title} website
				</title>
				<meta name='description' content={seo.description} />
			</Head>

			<ProjectHeader
				title={title}
				featuredImage={featuredImage}
				website={website}
				repository={repository}
			/>

			<ProjectCard
				description={projectDescription}
				technologies={technologies}
				position={position}
			/>

			{content.map((item) => renderContent(item))}

			<ProperLink
				props={{
					copy: 'View a list of other selected projects in my Portfolio',
					url: '/portfolio',
					target: '_self',
					tag: 'p',
					icon: 'faAngleRight',
				}}
			/>
		</Layout>
	);
};

export async function getStaticPaths() {
	const projects = await fetchAPI('/projects');

	// True returns an Array, False returns a string.
	const pathURLs = getSlugs(projects, false);

	return {
		paths: pathURLs,
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
