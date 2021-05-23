import PropTypes from 'prop-types';
import Link from 'next/link';
import SVGIcon from '@/comp/svgicon/SVGIcon';

const ProperLink = ({ props: { copy, url, target, tag, tag_class, icon } }) => {
	const Tag = tag;

	return (
		<Tag className={tag_class}>
			{target === '_blank' ? (
				<a href={url} target={target}>
					{copy}
					{icon && (
						<span className='marginLeft'>
							<SVGIcon icon={icon} />
						</span>
					)}
				</a>
			) : (
				<Link href={url}>
					<a target={target}>
						{copy}
						{icon && (
							<span className='marginLeft'>
								<SVGIcon icon={icon} />
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
