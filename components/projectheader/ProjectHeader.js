import Title from '@/title/Title';
import VisitRepo from '@/visitrepo/VisitRepo';
import VisitWebsite from '@/visitwebsite/VisitWebsite';
import ImageContainer from '@/imagecontainer/ImageContainer';
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
						style: 'bordered',
					}}
				/>
			)}

			{(website || repository) && (
				<div className={styles.websites}>
					{website && <VisitWebsite Tag='div' URL={website} />}
					{repository && <VisitRepo Tag='div' URL={repository} />}
				</div>
			)}
		</header>
	);
};

export default ProjectHeader;
