import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderIcon from '../../libs/fontawesome';

const Title = ({ Tag, copyMain, copySecondary, icon, alignment }) => {
	// If the icon value is not null then call renderIcon() to get the correct icon from the library.
	const renderedIcon = icon ? renderIcon(icon) : null;

	return (
		<Tag style={{ textAlign: alignment }}>
			{renderedIcon && (
				<FontAwesomeIcon icon={renderedIcon} className='marginRight' />
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
