import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';

import Title from '@/title/Title';
import ImageWrapper from '@/imageWrapper/ImageWrapper';
import ProperLink from '@/properlink/ProperLink';
import BtnGroup from '@/btngroup/BtnGroup';
import SocialLinks from '@/sociallinks/SocialLinks';

import styles from './SplitContent.module.scss';

const SplitContent = ({ props }) => {
	let LeftContentAlignment,
		RightContentAlignment = '';

	switch (props.LeftContentAlignment) {
		case 'left':
			LeftContentAlignment = 'start';
			break;

		case 'right':
			LeftContentAlignment = 'end';
			break;

		default:
			LeftContentAlignment = 'center';
			break;
	}

	switch (props.RightContentAlignment) {
		case 'left':
			RightContentAlignment = 'start';
			break;

		case 'right':
			RightContentAlignment = 'end';
			break;

		default:
			RightContentAlignment = 'center';
			break;
	}

	return (
		<div
			className={classNames(
				styles[`split_${props.Split}`],
				styles[`${props.OrderInMobile}`],
				styles[`${props.ContentStyle}`]
			)}
		>
			<div
				className={styles.ContentLeft}
				style={{
					textAlign: props.LeftContentAlignment,
					alignItems: LeftContentAlignment,
					justifyContent: props.LeftVerticalAlign,
				}}
			>
				{props?.LeftPicture && <ImageWrapper props={props.LeftPicture} />}
				{props?.LeftTitle && <Title props={props.LeftTitle} />}
				{props?.LeftContent && (
					<ReactMarkdown
						source={props.LeftContent}
						className={props.LeftContentStyle}
					/>
				)}
				{props?.LeftLink && <ProperLink props={props.LeftLink} />}
				{props?.LeftButtons && <BtnGroup props={props.LeftButtons} />}
				{props?.LeftSocialLink && <SocialLinks props={props.LeftSocialLink} />}
			</div>

			<div
				className={styles.ContentRight}
				style={{
					textAlign: props.RightContentAlignment,
					alignItems: RightContentAlignment,
					justifyContent: props.RightVerticalAlign,
				}}
			>
				{props?.RightPicture && <ImageWrapper props={props.RightPicture} />}
				{props?.RightTitle && <Title props={props.RightTitle} />}
				{props?.RightContent && (
					<ReactMarkdown
						source={props.RightContent}
						className={props.RightContentStyle}
					/>
				)}
				{props?.RightLink && <ProperLink props={props.RightLink} />}
				{props?.RightButtons && <BtnGroup props={props.RightButtons} />}
				{props?.RightSocialLink && (
					<SocialLinks props={props.RightSocialLink} />
				)}
			</div>
		</div>
	);
};

SplitContent.propTypes = {
	Split: PropTypes.string.isRequired,
	OrderInMobile: PropTypes.string.isRequired,
	LeftContentAlignment: PropTypes.string.isRequired,
	RightContentAlignment: PropTypes.string.isRequired,
};

SplitContent.defaultProps = {
	Split: 'split_Equal',
	OrderInMobile: 'LeftToRight',
	LeftContentAlignment: 'left',
	RightContentAlignment: 'left',
};

export default SplitContent;
