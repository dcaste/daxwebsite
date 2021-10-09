import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({ description, technologies, position }) => {
	if (!description || !technologies) {
		return null;
	}

	return (
		<div className={styles.projectCard}>
			<div className={styles.description}>
				{description && <ReactMarkdown source={description} />}
			</div>

			<div>
				<p>
					<strong>Position:</strong> {position}
				</p>
				<p>
					<strong>Technologies:</strong>
				</p>
				<ul>
					{technologies.map((technology) => (
						<li key={technology.id}>{technology.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

ProjectCard.propTypes = {
	description: PropTypes.string.isRequired,
	technologies: PropTypes.array.isRequired,
};

export default ProjectCard;
