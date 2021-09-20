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
	globalData: { personalInfo, navigation, SocialMedia },
	slug,
}) => {
	return (
		<Layout
			navigation={navigation}
			SocialMedia={SocialMedia}
			personalInfo={personalInfo}
		>
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
					icon: 'ArrowRight',
				}}
			/>
		</Layout>
	);
};

export async function getStaticPaths() {
	const projects = await fetchAPI('/projects');

	const paths = projects.map((project) => ({
		params: { slug: project.slug },
	}));

	// const slugs = posts.map((post) => {
	// 	const paths = returnArray === true ? [post.slug] : post.slug;
	// 	return { params: { slug: paths } };
	// });

	// True returns an Array, False returns a string.
	// const paths = await getSlugs(projects, false);

	return {
		paths: paths,
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
