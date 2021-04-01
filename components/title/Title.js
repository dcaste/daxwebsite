import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderIcon from '../../libs/fontawesome';

const Title = ({ Tag, copyMain, copySecondary, icon, alignment }) => {
	const renderedIcon = icon ? renderIcon(icon) : null;

	return (
		<Tag style={{ textAlign: alignment }}>
			{renderedIcon && (
				<span className='textRed'>
					<FontAwesomeIcon icon={renderedIcon} className='marginRight' />
				</span>
			)}
			{copyMain}
			{copySecondary && <span className='textRed'> {copySecondary}</span>}
		</Tag>
	);
};

Title.propTypes = {
	Tag: PropTypes.string.isRequired,
	alignment: PropTypes.string.isRequired,
	copyMain: PropTypes.string.isRequired,
	copySecondary: PropTypes.string,
	icon: PropTypes.string,
};

Title.defaultProps = {
	Tag: 'h2',
	alignment: 'left',
	copyMain: 'Please insert copy',
};

export default Title;
