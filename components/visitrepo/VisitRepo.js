import PropTypes from 'prop-types';
import SVGIcon from '@/comp/svgicon/SVGIcon';

const VisitRepo = ({ Tag, URL, className }) => {
	return (
		<Tag className={className}>
			<a target='_blank' rel='external' href={URL}>
				Visit repository <SVGIcon icon={'GitHub'} className='marginLeft' />
			</a>
		</Tag>
	);
};

VisitRepo.propTypes = {
	Tag: PropTypes.string,
	URL: PropTypes.string.isRequired,
};

VisitRepo.defaultProps = {
	Tag: 'p',
	URL: 'https://github.com/',
};

export default VisitRepo;
