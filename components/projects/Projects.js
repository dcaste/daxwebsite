import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import ImageContainer from '@/comp/imagecontainer/ImageContainer';
import ProperLink from '@/comp/properlink/ProperLink';
import VisitProject from '@/comp/visitproject/VisitProject';
import styles from './Projects.module.scss';

function Projects({ projects }) {
	const columnOrder = (order) => {
		const evenOrOdd = order % 2 === 0 ? 'even' : 'odd';
		return evenOrOdd;
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
									icon: 'ArrowRight',
								}}
							/>
						)}

						{project.website && (
							<VisitProject tag='p' url={project.website} type='website' />
						)}

						{project.repository && (
							<VisitProject
								Tag='p'
								url={project.repository}
								type='repository'
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
