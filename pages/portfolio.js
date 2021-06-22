import { NextSeo } from 'next-seo';
import Layout from '@/comp/layout/layout';
import Title from '@/comp/title/Title';
import Projects from '@/comp/projects/Projects';
import { fetchGRAPHQL } from '@/utils/api';

const Portfolio = ({
	projects: { projects },
	global: { navigation, SocialMedia },
}) => {
	return (
		<Layout navigation={navigation} SocialMedia={SocialMedia}>
			<NextSeo
				title='Portfolio - Dax Castellón'
				description='A collection of projects in which I have worked on as Web Developer'
				openGraph={{
					type: 'website',
					title: 'Portfolio - Dax Castellón',
					description:
						'A collection of projects in which I have worked on as Web Developer',
				}}
				additionalLinkTags={[
					{
						rel: 'icon',
						href: '/assets/img/favicon.ico',
						sizes: '16x16',
					},
					{
						rel: 'icon',
						href: '/assets/img/favicon-16x16.png',
						sizes: '16x16',
					},
					{
						rel: 'icon',
						href: '/assets/img/favicon-32x32.png',
						sizes: '32x32',
					},
					{
						rel: 'icon',
						href: '/assets/img/android-chrome-512x512.png',
						sizes: '512x512',
					},
				]}
			/>

			<Title
				props={{ tag: 'h1', copyMain: 'Portfolio', alignment: 'center' }}
			/>

			<Projects projects={projects} />
		</Layout>
	);
};

export async function getStaticProps() {
	const projects = await fetchGRAPHQL(`
	query Projects{
		projects(sort: "order:asc"){
			order
			title
			slug
			website
      repository
      projectDescription
			projectExcerpt
			linkCopy
		  showProjectLink
      thumbnail{
        alternativeText
        url
				width
				height
      }
		}
	}
`);

	return {
		props: { projects },
		revalidate: 1,
	};
}

export default Portfolio;
