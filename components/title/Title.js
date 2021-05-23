import PropTypes from 'prop-types';
import SVGIcon from '@/comp/svgicon/SVGIcon';

const Title = ({
	props: { Tag, copyMain, copySecondary, alignment, icon },
	className,
}) => {
	return (
		<Tag style={{ textAlign: alignment }} className={className}>
			{icon && (
				<span className='textRed marginRight'>
					<SVGIcon icon={icon} />
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
