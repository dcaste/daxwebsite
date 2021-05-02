import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderIcon } from '@/utils/misc';

const Title = ({
	props: { Tag, copyMain, copySecondary, alignment, icon },
	className,
}) => {
	const renderedIcon = icon ? renderIcon(icon) : null;

	return (
		<Tag style={{ textAlign: alignment }} className={className}>
			{renderedIcon && (
				<span className='textRed marginRight'>
					<FontAwesomeIcon icon={renderedIcon} />
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
