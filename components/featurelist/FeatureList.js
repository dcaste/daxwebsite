import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FeatureList.module.scss';
import classNames from 'classnames';

const FeatureList = (props) => {
	const [config, itemList] = props.data;
	const TitleTag = config.titleTag;
	const SubTitleTag = config.subtitleTag;
	const linkURL = config.link;

	return (
		<section className={styles.featureList}>
			<TitleTag className={styles.featureList__Title}>
				{config.title}
				<span className='textRed'> {config.titleRed}</span>
			</TitleTag>

			{itemList.items.map((item) => (
				<div className={styles.featureItem} key={item.id}>
					<span className={classNames(styles.featureIcon, 'fa-stack', 'fa-2x')}>
						<FontAwesomeIcon icon='circle' className='fa-stack-2x' />
						<FontAwesomeIcon
							icon={item.icon}
							className='fa-stack-1x fa-inverse'
						/>
					</span>
					<SubTitleTag>{item.title}</SubTitleTag>
					<p>{item.copy}</p>
				</div>
			))}
		</section>
	);
};

export default FeatureList;
