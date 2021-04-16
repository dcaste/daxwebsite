import Image from 'next/image';
import Title from '@/title/Title';
import VisitRepo from '@/visitrepo/VisitRepo';
import VisitWebsite from '@/visitwebsite/VisitWebsite';
import styles from './ProjectHeader.module.scss';

const ProjectHeader = ({ title, featuredImage, website, repository }) => {
	return (
		<header className={styles.projectHeader}>
			{title && (
				<Title props={{ Tag: 'h1', copyMain: title, alignment: 'center' }} />
			)}

			{featuredImage && (
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${featuredImage.url}`}
					alt={featuredImage.alternativetext}
					width={featuredImage.width}
					height={featuredImage.height}
					className='bordered'
				/>
			)}

			<div className={styles.websites}>
				{website && (
					<VisitWebsite Tag='div' URL={website} className='textCentered' />
				)}
				{website && (
					<VisitWebsite Tag='div' URL={website} className='textCentered' />
				)}
			</div>
		</header>
	);
};

export default ProjectHeader;
