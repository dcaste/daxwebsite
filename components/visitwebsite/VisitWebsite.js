import PropTypes from 'prop-types';
import SVGIcon from '@/comp/svgicon/SVGIcon';

const VisitWebsite = ({ Tag, URL, className }) => {
	return (
		<Tag className={className}>
			<a target='_blank' rel='external' href={URL}>
				Visit website <SVGIcon icon={'ExternalLink'} className='marginLeft' />
			</a>
		</Tag>
	);
};

VisitWebsite.propTypes = {
	Tag: PropTypes.string,
	URL: PropTypes.string.isRequired,
};

VisitWebsite.defaultProps = {
	Tag: 'span',
	URL: '#',
};

export default VisitWebsite;
