import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderIcon, getItemKey } from '@/utils/misc';
import styles from './SocialLinks.module.scss';

const SocialLinks = ({ props }) => {
	return (
		<div>
			{props.map((item) => (
				<a
					className={styles.item}
					href={item.URL}
					target='_blank'
					key={getItemKey(item.SocialMedia, item.id)}
				>
					{item.SocialMedia && (
						<span>
							<FontAwesomeIcon icon={renderIcon(item.SocialMedia)} />
						</span>
					)}
				</a>
			))}
		</div>
	);
};

SocialLinks.propTypes = {
	URL: PropTypes.string,
	SocialMedia: PropTypes.string,
};

export default SocialLinks;
