import Head from 'next/head';
import Layout, { siteTitle } from '@/comp/layout/layout';
import Title from '@/comp/title/Title';
import Projects from '@/comp/projects/Projects';
import { fetchGRAPHQL } from '@/utils/api';

const Portfolio = ({ projects: { projects } }) => {
	return (
		<Layout>
			<Head>
				<title>Portfolio - {siteTitle}</title>
			</Head>

			<Title
				props={{ Tag: 'h1', copyMain: 'Portfolio', alignment: 'center' }}
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
