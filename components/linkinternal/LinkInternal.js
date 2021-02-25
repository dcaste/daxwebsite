import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const LinkInternal = ({ Tag, Path, className, Copy }) => {
	return (
		<Tag className={className}>
			<Link href={Path}>
				<a rel='prefetch'>
					{Copy} <FontAwesomeIcon icon={'angle-right'} className='marginLeft' />
				</a>
			</Link>
		</Tag>
	);
};

LinkInternal.propTypes = {
	Tag: PropTypes.string,
	Path: PropTypes.string.isRequired,
	Copy: PropTypes.string.isRequired,
};

LinkInternal.defaultProps = {
	Tag: 'span',
	Path: '/',
	Copy: 'Know more...',
};

export default LinkInternal;
