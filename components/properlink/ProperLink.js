import PropTypes from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderIcon } from './../../utils/misc';

const ProperLink = ({ props: { copy, url, target, tag, tag_class, icon } }) => {
	const Tag = tag;
	const renderedIcon = icon ? renderIcon(icon) : null;

	return (
		<Tag className={tag_class}>
			{target === '_blank' ? (
				<a href={url} target={target}>
					{copy}
					{renderedIcon && (
						<span className='marginLeft'>
							<FontAwesomeIcon icon={renderedIcon} />
						</span>
					)}
				</a>
			) : (
				<Link href={url}>
					<a target={target}>
						{copy}
						{renderedIcon && (
							<span className='marginLeft'>
								<FontAwesomeIcon icon={renderedIcon} />
							</span>
						)}
					</a>
				</Link>
			)}
		</Tag>
	);
};

ProperLink.propTypes = {
	copy: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	target: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	tag_class: PropTypes.string,
	icon: PropTypes.string,
};

ProperLink.defaultProps = {
	copy: 'Copy goes here',
	url: '#',
	target: '_self',
	tag: 'p',
};

export default ProperLink;
