import ReactMarkdown from 'react-markdown';
import Title from '@/comp/title/Title';
import ProperLink from '@/comp/properlink/ProperLink';
import { getItemKey } from '@/utils/misc';

import styles from './Card.module.scss';

const Card = ({ props }) => {
	return (
		<div className={styles.card}>
			{props.title?.id && (
				<Title props={props.title} className={styles.title} />
			)}
			{props?.content &&
				props.content.map((item) => (
					<div className={styles[item.contentStyle]} key={item.id}>
						<ReactMarkdown source={item.content} />
					</div>
				))}
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
