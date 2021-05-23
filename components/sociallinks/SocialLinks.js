import PropTypes from 'prop-types';
import SVGIcon from '@/comp/svgicon/SVGIcon';
import { getItemKey } from '@/utils/misc';
import styles from './SocialLinks.module.scss';

const SocialLinks = ({ props }) => {
	return (
		<div>
			{props.map((item) => (
				<a
					className={styles.item}
					href={item.URL}
					target='_blank'
					key={getItemKey(item.icon, item.id)}
				>
					{item.icon && (
						<span>
							<SVGIcon icon={item.icon} />
						</span>
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
