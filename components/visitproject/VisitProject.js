import PropTypes from 'prop-types';
import SVGIcon from '@/comp/svgicon/SVGIcon';

const VisitProject = ({ tag, url, className, type }) => {
	const Tag = tag;
	const copy = type === 'website' ? 'website' : 'repository';
	const icon = type === 'website' ? 'ExternalLink' : 'GitHub';

	return (
		<Tag className={className}>
			<a target='_blank' rel='external' href={url}>
				Visit {copy} <SVGIcon icon={icon} className='marginLeft' />
			</a>
		</Tag>
	);
};

VisitProject.propTypes = {
	tag: PropTypes.string,
	url: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

VisitProject.defaultProps = {
	tag: 'p',
	url: 'https://github.com/',
	type: 'website',
};

export default VisitProject;
