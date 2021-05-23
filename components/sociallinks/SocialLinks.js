import PropTypes from 'prop-types';
import SVGIcon from '@/comp/svgicon/SVGIcon';
import { getItemKey } from '@/utils/misc';
import styles from './SocialLinks.module.scss';

const SocialLinks = ({ props }) => {
	if (!props) {
		return null;
	}

	return (
		<div>
			{props.map((item) => (
				<a
					className={styles.item}
					href={item.url}
					target='_blank'
					key={getItemKey(item.icon, item.id)}
				>
					{item.icon && (
						<i>
							<SVGIcon icon={item.icon} />
						</i>
					)}
				</a>
			))}
		</div>
	);
};

SocialLinks.propTypes = {
	URL: PropTypes.string,
	icon: PropTypes.string,
};

export default SocialLinks;
