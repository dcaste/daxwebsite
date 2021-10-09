import PropTypes from 'prop-types';

import Title from '@/comp/title/Title';
import ImageContainer from '@/comp/imagecontainer/ImageContainer';
import RichContent from '@/comp/richcontent/RichContent';
import ProperLink from '@/comp/properlink/ProperLink';
import BtnGroup from '@/comp/btngroup/BtnGroup';
import SocialLinks from '@/comp/sociallinks/SocialLinks';

import styles from './SplitContent.module.scss';

const SplitContent = ({ props }) => {
	// Assings the Grid's columns and the picture and content order.
	const gridStyle = `${props.split}_${props.picturePosition}`;

	return (
		<div className={styles[gridStyle]}>
			<div className={styles.picture}>
				<ImageContainer props={props.picture} />
			</div>

			<div className={styles.content}>
				{props.title?.id && <Title props={props.title} />}
				{props?.content && <RichContent props={props.content} />}
				{props.buttons && <BtnGroup props={props.buttons} />}
				{props.link?.id && <ProperLink props={props.link} />}
				{props.socialLink && <SocialLinks props={props.socialLink} />}
			</div>
		</div>
	);
};

SplitContent.propTypes = {
	split: PropTypes.string.isRequired,
};

SplitContent.defaultProps = {
	split: 'Equal',
	picturePosition: 'Left',
};

export default SplitContent;
