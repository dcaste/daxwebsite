import ReactMarkdown from 'react-markdown';
import Title from '@/comp/title/Title';
import styles from './TwoColumnsContent.module.scss';

function TwoColumnsContent({
	props: { title, leftColContent, rightColContent },
}) {
	return (
		<div className={styles.container}>
			{title && <Title props={title} className={styles.title} />}
			{leftColContent && (
				<div>
					<ReactMarkdown source={leftColContent.content} />
				</div>
			)}
			{rightColContent && (
				<div>
					<ReactMarkdown source={rightColContent.content} />
				</div>
			)}
		</div>
	);
}

export default TwoColumnsContent;
