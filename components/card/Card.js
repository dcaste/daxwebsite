import ReactMarkdown from 'react-markdown';
import Title from '@/comp/title/Title';
import ProperLink from '@/comp/properlink/ProperLink';
import RichContent from '@/comp/richcontent/RichContent';

import styles from './Card.module.scss';

const Card = ({ props }) => {
	return (
		<div className={styles.card}>
			{props.title?.id && (
				<Title props={props.title} className={styles.title} />
			)}
			{props?.content &&
				props.content.map((item) => <RichContent props={item} key={item.id} />)}
			{props.buttons?.id && <BtnGroup props={props.buttons} />}
			{props.link?.id && (
				<div className={styles.link}>
					<ProperLink props={props.link} />
				</div>
			)}
		</div>
	);
};

export default Card;
