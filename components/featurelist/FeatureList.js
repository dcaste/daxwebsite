import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderIcon } from './../../utils/misc';
import Title from '@/title/Title';
import classNames from 'classnames';
import styles from './FeatureList.module.scss';

const FeatureList = ({ props: { title, Feature } }) => {
	return (
		<div className={styles.featureList}>
			{title && <Title props={title} className={styles.title} />}

			{Feature.map((item) => (
				<div className={styles.item} key={item.id}>
					<span className={classNames(styles.icon, 'fa-stack', 'fa-2x')}>
						<FontAwesomeIcon icon='circle' className='fa-stack-2x' />
						<FontAwesomeIcon
							icon={renderIcon(item.icon.icon)}
							className='fa-stack-1x fa-inverse'
						/>
					</span>
					<h3>{item.title}</h3>
					<p>{item.description}</p>
				</div>
			))}
		</div>
	);
};

export default FeatureList;
