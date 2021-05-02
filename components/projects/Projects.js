import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import ImageContainer from '@/comp/imagecontainer/ImageContainer';
import ProperLink from '@/comp/properlink/ProperLink';
import styles from './Projects.module.scss';

function Projects({ projects }) {
	const columnOrder = (order) => {
		const oddOrEven = order % 2 !== 0 ? 'odd' : 'even';
		return oddOrEven;
	};

	return (
		<>
			{projects.map((project) => (
				<div className={styles[columnOrder(project.order)]} key={project.order}>
					<div className={styles.image}>
						<ImageContainer props={{ image: project.thumbnail }} />
					</div>
					<div className={styles.content}>
						<h2>{project.title}</h2>
						<ReactMarkdown source={project.projectExcerpt} />
						{project.showProjectLink && (
							<ProperLink
								props={{
									copy: project.linkCopy,
									url: `/projects/${project.slug}`,
									target: '_self',
									tag: 'p',
									icon: 'faAngleRight',
								}}
							/>
						)}
						{project.website && (
							<ProperLink
								props={{
									copy: 'Visit website',
									url: project.website,
									target: '_blank',
									tag: 'p',
									icon: 'faExternalLinkAlt',
								}}
							/>
						)}
						{project.repository && (
							<ProperLink
								props={{
									copy: 'Visit repository',
									url: project.repository,
									target: '_blank',
									tag: 'p',
									icon: 'faGithub',
								}}
							/>
						)}
					</div>
				</div>
			))}
		</>
	);
}

Projects.propTypes = {
	projects: PropTypes.array.isRequired,
};

export default Projects;
