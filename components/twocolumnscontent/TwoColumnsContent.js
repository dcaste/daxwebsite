import RichContent from '@/comp/richcontent/RichContent';
import Title from '@/comp/title/Title';
import styles from './TwoColumnsContent.module.scss';

function TwoColumnsContent({
	props: { title, leftColContent, rightColContent },
}) {
	return (
		<div className={styles.container}>
			{title && <Title props={title} className={styles.title} />}
			{leftColContent && <RichContent props={leftColContent} />}
			{rightColContent && <RichContent props={rightColContent} />}
		</div>
	);
}

export default TwoColumnsContent;
