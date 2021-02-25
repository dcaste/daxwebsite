import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VisitWebsite = ({ Tag, URL, className }) => {
	return (
		<Tag className={className}>
			<a target='_blank' rel='external' href={URL}>
				Visit website{' '}
				<FontAwesomeIcon icon={'external-link-alt'} className='marginLeft' />
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
