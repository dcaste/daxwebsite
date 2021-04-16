import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';

import Title from '@/title/Title';
import ImageContainer from '@/imagecontainer/ImageContainer';
import ProperLink from '@/properlink/ProperLink';
import BtnGroup from '@/btngroup/BtnGroup';
import SocialLinks from '@/sociallinks/SocialLinks';
import ContactForm from '@/contactform/ContactForm';

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
			{props?.mainTitle && (
				<div className={styles.mainHeader}>
					<Title props={props.mainTitle} />
				</div>
			)}

			<div
				className={styles.ContentLeft}
				style={{
					textAlign: props.LeftContentAlignment,
					alignItems: LeftContentAlignment,
					justifyContent: props.LeftVerticalAlign,
				}}
			>
				{props.LeftPicture?.id && <ImageContainer props={props.LeftPicture} />}
				{props.LeftTitle?.id && <Title props={props.LeftTitle} />}
				{props?.LeftContent && (
					<ReactMarkdown
						source={props.LeftContent}
						className={props.LeftContentStyle}
					/>
				)}
				{props.LeftLink?.id && <ProperLink props={props.LeftLink} />}
				{props.LeftButtons[0]?.id && <BtnGroup props={props.LeftButtons} />}
				{props.LeftSocialLink[0]?.id && (
					<SocialLinks props={props.LeftSocialLink} />
				)}
				{props.LeftForm === true && <ContactForm />}
			</div>

			<div
				className={styles.ContentRight}
				style={{
					textAlign: props.RightContentAlignment,
					alignItems: RightContentAlignment,
					justifyContent: props.RightVerticalAlign,
				}}
			>
				{props.RightPicture?.id && (
					<ImageContainer props={props.RightPicture} />
				)}
				{props.RightTitle?.id && <Title props={props.RightTitle} />}
				{props?.RightContent && (
					<ReactMarkdown
						source={props.RightContent}
						className={props.RightContentStyle}
					/>
				)}
				{props.RightLink?.id && <ProperLink props={props.RightLink} />}
				{props.RightButtons[0]?.id && <BtnGroup props={props.RightButtons} />}
				{props.RightSocialLink[0]?.id && (
					<SocialLinks props={props.RightSocialLink} />
				)}
				{props.RightForm === true && <ContactForm />}
			</div>

			{props?.mainLink && (
				<div className={styles.mainFooter}>
					<ProperLink props={props.mainLink} />
				</div>
			)}
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
