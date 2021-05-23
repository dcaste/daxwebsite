import Title from '@/comp/title/Title';
import VisitProject from '@/comp/visitproject/VisitProject';
import ImageContainer from '@/comp/imagecontainer/ImageContainer';
import styles from './ProjectHeader.module.scss';

const ProjectHeader = ({ title, featuredImage, website, repository }) => {
	return (
		<header className={styles.projectHeader}>
			{title && (
				<Title props={{ Tag: 'h1', copyMain: title, alignment: 'center' }} />
			)}

			{featuredImage && (
				<ImageContainer
					props={{
						image: {
							url: featuredImage.url,
							alt: featuredImage.alternativetext,
							width: featuredImage.width,
							height: featuredImage.height,
						},
						style: 'shadowed',
					}}
				/>
			)}

			{(website || repository) && (
				<div className={styles.websites}>
					{website && <VisitProject Tag='div' url={website} type='website' />}
					{repository && (
						<VisitProject Tag='div' url={repository} type='repository' />
					)}
				</div>
			)}
		</header>
	);
};

export default ProjectHeader;
