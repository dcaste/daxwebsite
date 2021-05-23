import PropTypes from 'prop-types';
import SVGIcon from '@/comp/svgicon/SVGIcon';

const VisitProject = ({ Tag, url, className, type }) => {
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
	Tag: PropTypes.string,
	url: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

VisitProject.defaultProps = {
	Tag: 'p',
	url: 'https://github.com/',
	type: 'website',
};

export default VisitProject;
