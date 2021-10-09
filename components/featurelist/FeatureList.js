import PropTypes from 'prop-types';
import SVGIcon from '@/comp/svgicon/SVGIcon';
import Title from '@/comp/title/Title';
import styles from './FeatureList.module.scss';

const FeatureList = ({ props: { title, feature } }) => {
	return (
		<div className={styles.featureList}>
			{title && <Title props={title} className={styles.title} />}

			{feature.map((item) => (
				<div className={styles.item} key={item.id}>
					<i className={styles.icon}>
						<SVGIcon icon={item.icon.icon} />
					</i>
					<h3>{item.title}</h3>
					<p>{item.description}</p>
				</div>
			))}
		</div>
	);
};

FeatureList.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string,
};

FeatureList.defaultProps = {
	icon: 'Info',
};

export default FeatureList;
