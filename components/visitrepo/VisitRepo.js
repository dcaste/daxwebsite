import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VisitRepo = ({ Tag, URL, className }) => {
	return (
		<Tag className={className}>
			<a target='_blank' rel='external' href={URL}>
				Visit repository{' '}
				<FontAwesomeIcon icon={['fab', 'github']} className='marginLeft' />
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
