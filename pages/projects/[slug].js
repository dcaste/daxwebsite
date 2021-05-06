import Layout from '@/comp/layout/layout';
import SeoBasic from '@/comp/seo/SeoBasic';
import ProjectHeader from '@/comp/projectheader/ProjectHeader';
import ProjectCard from '@/comp/projectcard/ProjectCard';
import renderContent from '@/utils/renderContent';
import ProperLink from '@/comp/properlink/ProperLink';
import { fetchAPI, getSlugs } from '@/utils/api';

const Project = ({
	project: {
		openGraph,
		title,
		website,
		repository,
		featuredImage,
		content,
		projectDescription,
		technologies,
		position,
	},
	global: { personalInfo },
	slug,
}) => {
	return (
		<Layout>
			{openGraph && (
				<SeoBasic personal={personalInfo} og={openGraph} slug={slug} />
			)}

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
	const pathURLs = await getSlugs(projects, false);

	return {
		paths: pathURLs,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const slug = params.slug;
	const projects = await fetchAPI(`/projects?slug=${slug}`);

	return {
		props: { project: projects[0], slug },
		revalidate: 1,
	};
}

export default Project;
