import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import ImageContainer from '@/imagecontainer/ImageContainer';
import ProperLink from '@/properlink/ProperLink';
import styles from './Projects.module.scss';

function Projects({ projects }) {
	return (
		<>
			{projects.map((project) =>
				project.order % 2 !== 0 ? (
					<div className={styles.odd} key={project.order}>
						<div className={styles.image}>
							<ImageContainer props={{ image: project.thumbnail }} />
						</div>
						<div>
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
				) : (
					<div className={styles.even} key={project.order}>
						<div>
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
						<div className={styles.image}>
							<ImageContainer props={{ image: project.thumbnail }} />
						</div>
					</div>
				)
			)}
		</>
	);
}

Projects.propTypes = {
	projects: PropTypes.array.isRequired,
};

export default Projects;
